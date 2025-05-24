const BASE_URL = "http://localhost:3001/api";

export interface MenuItemType {
  id: string;
  name: string;
  price: number;
  stock: number;
  // Add other fields if needed
}

export interface OrderItemType {
  id?: string;
  name: string;
  price: number;
  quantity: number;
}

export const getMenuItems = async (): Promise<MenuItemType[]> => {
  if (!BASE_URL) throw new Error("BASE_URL is not defined");

  const response = await fetch(`${BASE_URL}/storage`);
  const resData = await response.json();
  if (!response.ok) throw new Error("Failed to fetch menu.");
  return resData.storage;
};

export const submitOrder = async (
  orderItems: OrderItemType[]
): Promise<any> => {
  if (!BASE_URL) throw new Error("BASE_URL is not defined");

  const response = await fetch(`${BASE_URL}/order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: orderItems }),
  });
  const resData = await response.json();
  if (!response.ok && resData.error) throw new Error(resData.error);
  else if (!response.ok) throw new Error("Order failed");
  return resData;
};
