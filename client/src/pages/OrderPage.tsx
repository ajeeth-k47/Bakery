import React from "react";
import Menu from "../components/Menu";
import { OrderProvider } from "../store/orderContext";

const Order: React.FC = () => {
  return (
    <OrderProvider>
      <Menu />
    </OrderProvider>
  );
};

export default Order;
