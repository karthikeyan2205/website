export const fetchProfile = async (userId: string) => {
  const baseUrl = import.meta.env.VITE_API_URL || '';
  const response = await fetch(`${baseUrl}/api/${userId}`);
  if (!response.ok) throw new Error("Failed to fetch profile");
  return response.json();
};

export async function fetchOrders(userId: string, statusFilter?: string, yearFilter?: string) {
  const baseUrl = import.meta.env.VITE_API_URL || '';
  let url = `${baseUrl}/api/orders/user/${userId}`;
  const params = [];
  if (statusFilter) params.push(`status=${statusFilter}`);
  if (yearFilter) params.push(`year=${yearFilter}`);
  if (params.length) url += `?${params.join("&")}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch orders');
  }
  return res.json();
}