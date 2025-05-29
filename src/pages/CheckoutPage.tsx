import { saveProfile } from '@/utils/saveProfile';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/hooks/use-cart';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage,} from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from '@/components/ui/use-toast';
import { CreditCard, Truck, Check } from 'lucide-react';
import { getAuth } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "@/utils/firebase"; // Make sure db is your Firestore instance
import { saveOrder } from "@/utils/saveOrder"; // You need to create this

export type SaveOrderParams = {
  userId: string;
  fullName: string;
  email: string;
  items: any[];
  total: number;
  orderNumber: string;
  // add other fields if needed
};

const checkoutSchema = z.object({
  fullName: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  address: z.string().min(5, { message: 'Address must be at least 5 characters' }),
  city: z.string().min(2, { message: 'City is required' }),
  state: z.string().min(2, { message: 'State is required' }),
  zipCode: z.string().min(5, { message: 'Zip code is required' }),
  cardNumber: z.string().min(16, { message: 'Please enter a valid card number' }),
  cardExpiry: z.string().regex(/^\d{2}\/\d{2}$/, { message: 'Use format MM/YY' }),
  cardCVC: z.string().length(3, { message: 'CVC must be 3 digits' }),
  savePaymentInfo: z.boolean().optional(),
  shippingMethod: z.enum(['standard', 'express']),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  const user = getAuth().currentUser;
  
  const defaultValues: Partial<CheckoutFormValues> = {
    shippingMethod: 'standard',
    savePaymentInfo: false,
  };

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues,
  });

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        const ref = doc(db, "userProfiles", user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) setProfile(snap.data());
      }
    };
    fetchProfile();
  }, [user]);

  const onSubmit = async (data: CheckoutFormValues) => {
    if (user && data.email !== user.email) {
      toast({
        title: "Email mismatch!",
        description: "The email entered does not match your signed-in email address.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    setTimeout(async () => {
      setIsSubmitting(false);
      toast({
        title: "Order placed successfully!",
        description: "Your order has been processed. Check your email for confirmation.",
      });
      clearCart();
      if (user) {
        await saveProfile({
          userId: user.uid,
          fullName: data.fullName,
          email: data.email,
          address: data.address,
          city: data.city,
          state: data.state,
          zipCode: data.zipCode,
        });
        // Save order to backend and get the saved order (with orderNumber or _id)
const orderNumber = `ORD-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
await saveOrder({
  userId: user.uid,
  fullName: data.fullName,
  email: data.email,
  items: items.map(item => ({
    productName: item.product.name,
    quantity: item.quantity,
    price: item.product.price,
    image: item.product.image, // include image for order history
  })),
  total,
  orderNumber,
} as SaveOrderParams);
navigate(`/checkout-success?orderId=${orderNumber}`);

      }
    }, 1500);
  };

  if (items.length === 0) {
    navigate('/checkout-success');
    return null;
  }

  const subtotal = totalPrice;
  const shipping = form.watch('shippingMethod') === 'express' ? 15.99 : 5.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;
  
  return (
    <>
      <Header />
      <main className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Shipping Information */}
                  <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Truck className="h-5 w-5" />
                      Shipping Information
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem className="col-span-2">
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                              <Input placeholder="123 Main St" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input placeholder="San Francisco" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State</FormLabel>
                              <FormControl>
                                <Input placeholder="CA" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="zipCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Zip Code</FormLabel>
                              <FormControl>
                                <Input placeholder="94103" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <FormField
                        control={form.control}
                        name="shippingMethod"
                        render={({ field }) => (
                          <FormItem className="space-y-4">
                            <FormLabel>Shipping Method</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-3"
                              >
                                <div className="flex items-center space-x-2 border p-4 rounded-md hover:bg-muted/50">
                                  <RadioGroupItem value="standard" id="standard" />
                                  <Label htmlFor="standard" className="flex-1 cursor-pointer">
                                    <div className="font-medium">Standard Shipping</div>
                                    <div className="text-sm text-muted-foreground">3-5 business days</div>
                                  </Label>
                                  <div className="font-medium">$5.99</div>
                                </div>
                                <div className="flex items-center space-x-2 border p-4 rounded-md hover:bg-muted/50">
                                  <RadioGroupItem value="express" id="express" />
                                  <Label htmlFor="express" className="flex-1 cursor-pointer">
                                    <div className="font-medium">Express Shipping</div>
                                    <div className="text-sm text-muted-foreground">1-2 business days</div>
                                  </Label>
                                  <div className="font-medium">$15.99</div>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  {/* Payment Information */}
                  <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Payment Information
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="cardNumber"
                        render={({ field }) => (
                          <FormItem className="col-span-2">
                            <FormLabel>Card Number</FormLabel>
                            <FormControl>
                              <Input placeholder="4242 4242 4242 4242" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="cardExpiry"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Expiry Date</FormLabel>
                            <FormControl>
                              <Input placeholder="MM/YY" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="cardCVC"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>CVC</FormLabel>
                            <FormControl>
                              <Input placeholder="123" type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="mt-4">
                      <FormField
                        control={form.control}
                        name="savePaymentInfo"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-4">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                id="save-payment-info"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel htmlFor="save-payment-info">
                                Save this payment information for next time
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Complete Purchase"}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Order Summary */}
            <div className="md:col-span-4">
              <div className="bg-white rounded-lg shadow p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="max-h-60 overflow-y-auto mb-4 pr-2">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex items-center justify-between py-3 border-b">
                      <div className="flex items-center">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="ml-3">
                          <h4 className="text-sm font-medium">{item.product.name}</h4>
                          <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between font-medium text-lg mb-6">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Secure payment processing</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Fast shipping options available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CheckoutPage;
