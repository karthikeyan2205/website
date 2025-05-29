import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserProfile from './models/UserProfile.js';
import PDFDocument from 'pdfkit';
import Order from './models/Order.js';

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API endpoint to save or update user profile
app.post('/api/save-profile', async (req, res) => {
  try {
    const { userId, ...profile } = req.body;
    const updatedProfile = await UserProfile.findOneAndUpdate(
      { userId },
      { $set: profile },
      { upsert: true, new: true }
    );
    res.status(200).json(updatedProfile); // Return the saved/updated profile
  } catch (err) {
    res.status(500).json({ error: 'Failed to save profile' });
  }
});

app.post('/api/save-order', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save order' });
  }
});

app.get('/api/:userId', async (req, res) => {
  try {
    const profile = await UserProfile.findOne({ userId: req.params.userId });
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

app.get('/api/invoice/:orderNumber', async (req, res) => {
  try {
    const order = await Order.findOne({ orderNumber: req.params.orderNumber });
    if (!order) return res.status(404).send('Order not found');

    const doc = new PDFDocument({ margin: 40 });
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=invoice-${order.orderNumber}.pdf`);
    doc.pipe(res);

    // Header
    doc.fontSize(28).fillColor('#007bff').text('INVOICE', 50, 40);
    doc.fontSize(10).fillColor('#333');
    doc.text(`Invoice #: ${order.orderNumber}`, 400, 50);
    doc.text(`Invoice Date: ${order.createdAt.toLocaleDateString()}`, 400, 65);
    doc.text(`Due Date: ${new Date(order.createdAt.getTime() + 15*24*60*60*1000).toLocaleDateString()}`, 400, 80);
    doc.text(`Payment Terms: Net 15`, 400, 95);

    // Company Info
    doc.fontSize(12).fillColor('#222').text('Your Company Name Pvt. Ltd.', 50, 90);
    doc.fontSize(10).fillColor('#333')
      .text('123 Business Street', 50, 105)
      .text('City, State, PIN: 123456', 50, 120)
      .text('Email: info@yourcompany.com', 50, 135)
      .text('Phone: +91 98765 43210', 50, 150);

    // Client Info
    doc.fontSize(12).fillColor('#222').text('Bill To:', 50, 180);
    doc.fontSize(10).fillColor('#333')
      .text(order.fullName, 50, 195)
      .text(order.address, 50, 210)
      .text(`${order.city}, ${order.state}, PIN: ${order.zipCode}`, 50, 225)
      .text(`Email: ${order.email}`, 50, 240);

    // Table Header
    let y = 270;
    doc.fontSize(11).fillColor('#fff').rect(50, y, 500, 20).fill('#007bff');
    doc.fillColor('#fff')
      .text('#', 55, y + 5)
      .text('Description', 80, y + 5)
      .text('Quantity', 270, y + 5)
      .text('Unit Price', 350, y + 5)
      .text('Amount', 450, y + 5);
    doc.fillColor('#333');

    // Table Rows
    y += 25;
    order.items.forEach((item, idx) => {
      doc.rect(50, y - 2, 500, 20).fill(idx % 2 === 0 ? '#f9f9f9' : '#fff');
      doc.fillColor('#333')
        .text(idx + 1, 55, y)
        .text(item.productName, 80, y)
        .text(item.quantity, 270, y)
        .text(`₹${item.price.toFixed(2)}`, 350, y)
        .text(`₹${(item.price * item.quantity).toFixed(2)}`, 450, y);
      y += 20;
    });

    // Table Footer (Totals)
    y += 10;
    doc.fontSize(10).fillColor('#333')
      .text('Subtotal:', 350, y)
      .text(`₹${order.total.toFixed(2)}`, 450, y);
    y += 15;
    doc.text('GST (18%):', 350, y)
      .text(`₹${(order.total * 0.18).toFixed(2)}`, 450, y);
    y += 15;
    doc.font('Helvetica-Bold').fontSize(12).fillColor('#fff')
      .rect(350, y, 200, 20).fill('#007bff');
    doc.fillColor('#fff')
      .text('Total Due:', 355, y + 5)
      .text(`₹${(order.total * 1.18).toFixed(2)}`, 455, y + 5);
    doc.font('Helvetica').fillColor('#333');

    // Notes
    y += 40;
    doc.fontSize(10).fillColor('#222').text('Notes:', 50, y);
    doc.fontSize(9).fillColor('#666')
      .text('Thank you for your business! We appreciate your prompt payment.', 50, y + 15)
      .text('Please make all checks payable to "Your Company Name Pvt. Ltd."', 50, y + 30);

    // Payment Info
    y += 60;
    doc.fontSize(10).fillColor('#222').text('Bank Details for Payment:', 50, y);
    doc.fontSize(9).fillColor('#666')
      .text('Bank Name: All Banks', 50, y + 15)
      .text('Account Name: Your Account.', 50, y + 30)
      .text('Account Number: [852500002585]', 50, y + 45)
      .text('IFSC Code: SAK1000KAR', 50, y + 60)
      .text('SWIFT Code: RLSK69772004 (for international payments)', 50, y + 75);

    // Footer
    doc.fontSize(9).fillColor('#777').text('© 2025 Your Company Name Pvt. Ltd. All rights reserved.', 50, 730, { align: 'center' });

    doc.end();
  } catch (err) {
    res.status(500).send('Failed to generate invoice');
  }
});

app.get('/', (req, res) => {
  res.send('API server is running!');
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});