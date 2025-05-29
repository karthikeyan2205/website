import express from 'express';
import UserProfile from '../pages/models/UserProfile.js';

const router = express.Router();

router.post('/save-profile', async (req, res) => {
  try {
    const { userId, fullName, email, address, city, state, zipCode } = req.body;
    const profile = await UserProfile.findOneAndUpdate(
      { userId },
      { fullName, email, address, city, state, zipCode },
      { upsert: true, new: true }
    );
    res.status(200).json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const profile = await UserProfile.findOne({ userId: req.params.userId });
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;