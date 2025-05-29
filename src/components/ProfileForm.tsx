import React from "react";
import { saveProfile } from "@/utils/saveProfile";

const ProfileForm = () => {
  const handleSave = async () => {
    try {
      // Replace this with actual user ID retrieval logic as needed
      const userId = "replace-with-actual-user-id";
      await saveProfile({
        userId: userId,
        fullName: 'John Doe',
        email: 'john@example.com',
        address: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001'
      });
      alert('Profile saved!');
    } catch (err) {
      alert('Error saving profile');
    }
  };

  return (
    <button onClick={handleSave}>
      Save Profile
    </button>
  );
};

export default ProfileForm;