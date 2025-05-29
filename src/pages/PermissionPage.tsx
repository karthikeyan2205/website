import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useState } from "react";



const PermissionPage = () => {
  const [signingOut, setSigningOut] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    setSigningOut(true);
    await signOut(auth);
    setSigningOut(false);
    navigate("/signin");
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 border rounded shadow text-center">
      <h1 className="text-2xl font-bold mb-4">Permission Page</h1>
      <p className="mb-6">You are signed in and can access this page.</p>
      <button
        onClick={handleSignOut}
        disabled={signingOut}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        {signingOut ? "Signing Out..." : "Sign Out"}
      </button>
    </div>
  );
};

export default PermissionPage;