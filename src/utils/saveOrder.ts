import { SaveOrderParams } from "@/pages/CheckoutPage";

export async function saveOrder(order: SaveOrderParams) {
  const baseUrl = import.meta.env.VITE_API_URL || '';
  const response = await fetch(`${baseUrl}/api/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  });
  if (!response.ok) throw new Error("Failed to save order");
  return response.json();
}