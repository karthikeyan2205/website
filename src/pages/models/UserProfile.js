import mongoose from 'mongoose';

const userProfileSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  fullName: String,
  email: String,
  address: String,
  city: String,
  state: String,
  zipCode: String,
});

export default mongoose.model('UserProfile', userProfileSchema);