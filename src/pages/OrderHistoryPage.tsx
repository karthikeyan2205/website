import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./OrderHistoryPage.css";

interface Order {
  _id: string;
  orderNumber: string;
  createdAt: string;
  total: number;
  status: string;
  items: { productName: string; quantity: number; price: number, image?: string }[];
  userReview?: string; // Added userReview field
}

const OrderHistoryPage = () => {
  const user = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [yearFilter, setYearFilter] = useState<string>("");

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return;
      setLoading(true);
      const baseUrl = import.meta.env.VITE_API_URL || '';
      let apiUrl = `${baseUrl}/api/orders/user/${user?.uid}`;
      const params = [];
      if (statusFilter) params.push(`status=${statusFilter}`);
      if (yearFilter) params.push(`year=${yearFilter}`);
      if (params.length) apiUrl += `?${params.join("&")}`;
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        console.log('Fetched orders:', data); // Debug log
        setOrders(data);
      } catch (err) {
        setOrders([]);
      }
      setLoading(false);
    };
    fetchOrders();
  }, [user, statusFilter, yearFilter]);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <aside className="md:w-1/4 w-full bg-white rounded shadow p-4 mb-6 md:mb-0">
            <h3 className="font-semibold mb-2">ORDER STATUS</h3>
            <div className="flex flex-col gap-2 mb-4">
              {["On the way", "Delivered", "Cancelled", "Returned"].map(status => (
                <label key={status} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={statusFilter === status}
                    onChange={() => setStatusFilter(statusFilter === status ? "" : status)}
                  />
                  {status}
                </label>
              ))}
            </div>
            <h3 className="font-semibold mb-2">ORDER TIME</h3>
            <div className="flex flex-col gap-2">
              {["Last 30 days", "2025", "2024", "2023", "2022", "2021", "Older"].map(year => (
                <label key={year} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={yearFilter === year}
                    onChange={() => setYearFilter(yearFilter === year ? "" : year)}
                  />
                  {year}
                </label>
              ))}
            </div>
          </aside>
          {/* Orders List */}
          <section className="flex-1">
            <h2 className="font-semibold text-2xl mb-6">Order History</h2>
            {/* Search Orders Bar */}
            <div className="mb-6 flex gap-2">
              <input
                type="text"
                placeholder="Search your orders here"
                className="border rounded px-3 py-2 flex-1"
                // Implement search logic as needed
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Search Orders</button>
            </div>
            {loading ? (
              <div>Loading...</div>
            ) : orders.length === 0 ? (
              <div className="text-muted-foreground">No orders found.</div>
            ) : (
              <div className="order-history">
                {orders.map((order) => {
                  const firstItem = order.items[0];
                  return (
                    <div key={order._id} className="order-box border rounded p-4 flex flex-col md:flex-row md:items-center md:gap-6 bg-white">
                      {/* Product Image and Name */}
                      <div className="flex items-center gap-4 md:w-1/3">
                        <img
                          src={firstItem?.image || "/images/placeholder.svg"}
                          alt={firstItem?.productName}
                          className="w-20 h-20 object-contain rounded bg-gray-100"
                        />
                        <div>
                          <div className="font-semibold truncate max-w-xs">{firstItem?.productName}</div>
                          <div className="text-xs text-gray-500">Qty: {firstItem?.quantity}</div>
                          {/* Show Product Price */}
                          <div className="text-xs text-gray-500">Price: ₹{firstItem?.price?.toLocaleString()}</div>
                        </div>
                      </div>
                      {/* Price, Status, and Order Info */}
                      <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 mt-4 md:mt-0">
                        {/* Show Order ID */}
                        <div className="text-xs text-gray-500">Order ID: {order.orderNumber}</div>
                        {/* Show Order Total */}
                        <div className="text-lg font-bold">Order Total: ₹{order.total.toLocaleString()}</div>
                        <div className={`text-sm font-semibold ${order.status === 'Delivered' ? 'text-green-600' : order.status === 'Cancelled' ? 'text-red-600' : order.status === 'Returned' ? 'text-yellow-600' : 'text-blue-600'}`}>
                          {order.status === 'Delivered'
                            ? `Delivered on ${new Date(order.createdAt).toLocaleString('en-IN', { month: 'short', day: '2-digit' })}`
                            : order.status === 'Cancelled'
                            ? `Cancelled on ${new Date(order.createdAt).toLocaleString('en-IN', { month: 'short', day: '2-digit' })}`
                            : order.status}
                        </div>
                        {/* Show User Review if available */}
                        {order.userReview && (
                          <div className="text-xs text-blue-700 mt-1">Review: {order.userReview}</div>
                        )}
                        {/* Status message and review link */}
                        {order.status === 'Delivered' && (
                          <div className="text-xs text-blue-700 mt-1 cursor-pointer">★ Rate & Review Product</div>
                        )}
                        {order.status === 'Cancelled' && (
                          <div className="text-xs text-muted-foreground mt-1">As per your request, your item has been cancelled</div>
                        )}
                      </div>
                      {/* View Details Link */}
                      <div className="flex flex-col gap-2 md:items-end mt-4 md:mt-0">
                        <Link to={`/order/${order.orderNumber}`} className="text-blue-600 hover:underline text-sm">View Details</Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OrderHistoryPage;
