import { useEffect, useState } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/hooks/use-auth";

interface Order {
  _id: string;
  orderNumber: string;
  createdAt: string;
  total: number;
  status: string;
  items: { productName: string; quantity: number; price: number }[];
}

const OrderDetailPage = () => {
  const { orderNumber } = useParams<{ orderNumber: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [yearFilter, setYearFilter] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();
  const user = useAuth();

  useEffect(() => {
    const fetchOrder = async () => {
      setLoading(true);
      try {
        const baseUrl = import.meta.env.VITE_API_URL || '';
        const res = await fetch(`${baseUrl}/api/orders/${orderNumber}`);
        if (!res.ok) throw new Error('Failed to fetch order details');
        const data = await res.json();
        setOrder(data);
      } catch (err) {
        setOrder(null);
      }
      setLoading(false);
    };
    if (orderNumber) fetchOrder();
  }, [orderNumber]);

  return (
    <>
      <Header />
      <div className="flex justify-end mb-4">
        {user && (
          <Link
            to="/order-history"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            View Order History
          </Link>
        )}
      </div>
      <main className="container mx-auto px-4 py-10">
        <div className="max-w-xl mx-auto bg-white rounded shadow p-6">
          <Link to="/order-history" className="text-blue-600 hover:underline text-sm">&larr; Back to Order History</Link>
          <h2 className="font-semibold text-2xl mb-6">Order Details</h2>
          {/* Filter Controls */}
          <div className="mb-4 flex flex-wrap gap-4 items-center">
            <select
              className="border rounded px-2 py-1"
              value={statusFilter}
              onChange={e => {
                setStatusFilter(e.target.value);
                setSearchParams({ status: e.target.value, year: yearFilter });
              }}
            >
              <option value="">All Statuses</option>
              <option value="On the way">On the way</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Returned">Returned</option>
            </select>
            <select
              className="border rounded px-2 py-1"
              value={yearFilter}
              onChange={e => {
                setYearFilter(e.target.value);
                setSearchParams({ status: statusFilter, year: e.target.value });
              }}
            >
              <option value="">All Years</option>
              {Array.from({ length: 5 }, (_, i) => 2025 - i).map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : !order ? (
            <div className="text-muted-foreground">Order not found.</div>
          ) : (
            <>
              <div className="mb-2 font-bold">Order #{order.orderNumber}</div>
              <div className="mb-2 text-sm text-muted-foreground">Placed: {new Date(order.createdAt).toLocaleString()}</div>
              <div className="mb-2">Total: <b>${order.total.toFixed(2)}</b></div>
              <div className={`mb-2 text-sm font-semibold ${order.status === 'Delivered' ? 'text-green-600' : order.status === 'Cancelled' ? 'text-red-600' : order.status === 'Returned' ? 'text-yellow-600' : 'text-blue-600'}`}>{order.status}</div>
              <ul className="text-sm mb-4">
                {order.items.map((item, idx) => (
                  <li key={idx}>
                    {item.productName} x {item.quantity} (${item.price.toFixed(2)} each)
                  </li>
                ))}
              </ul>
              {/* Status Update Action (for demonstration, not functional) */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Update Status:</label>
                <select
                  className="border rounded px-2 py-1"
                  value={order.status}
                  onChange={e => alert(`Status update to '${e.target.value}' not implemented in demo.`)}
                >
                  <option value="On the way">On the way</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="Returned">Returned</option>
                </select>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OrderDetailPage;
