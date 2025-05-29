import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useCart } from "@/hooks/use-cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchProfile } from "@/utils/fetchProfile"; // <-- use named import
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const user = useAuth();
  const { items } = useCart();
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const getProfile = async () => {
      if (user) {
        try {
          const data = await fetchProfile(user.uid);
          setProfile(data);
        } catch (err) {
          setProfile(null);
        }
      }
    };
    getProfile();
  }, [user]);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <div className="max-w-xl mx-auto bg-white rounded shadow p-6">
          <div className="flex items-center gap-4 mb-6">
            <img
              src="/images/csk.jpeg"
              alt="User Logo"
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <div className="font-bold text-lg">{user?.displayName || "No username"}</div>
              <div className="text-muted-foreground">{user?.email}</div>
              {/* Order History Button */}
              <Link
                to="/order-history"
                className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                View Order History
              </Link>
            </div>
          </div>
          <h2 className="font-semibold text-xl mb-4">Profile Details</h2>
          {profile ? (
            <ul className="mb-6 space-y-1">
              <li><b>Full Name:</b> {profile.fullName}</li>
              <li><b>Email:</b> {profile.email}</li>
              <li><b>Address:</b> {profile.address}</li>
              <li><b>City:</b> {profile.city}</li>
              <li><b>State:</b> {profile.state}</li>
              <li><b>Zip Code:</b> {profile.zipCode}</li>
            </ul>
          ) : (
            <div className="text-muted-foreground mb-6">No profile details found.</div>
          )}
          <h2 className="font-semibold text-xl mb-4">Your Cart Products</h2>
          {items.length === 0 ? (
            <div className="text-muted-foreground">Your cart is empty.</div>
          ) : (
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.product.id} className="flex items-center gap-3">
                  <img src={item.product.image} alt={item.product.name} className="w-10 h-10 object-cover rounded" />
                  <span>{item.product.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProfilePage;