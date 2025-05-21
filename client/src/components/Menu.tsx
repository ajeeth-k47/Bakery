import { useState, useEffect, useMemo, useCallback } from "react";
import MenuItem from "./MenuItem";
import styles from "./Menu.module.scss";
import { getMenuItems, submitOrder } from "../hooks/backend";
import { useOrder } from "../store/orderContext";
import { useNavigate } from "react-router-dom";
import Card from "./UI/Card";
import Button from "./UI/Button";
import CardFooter from "./UI/CardFooter";

interface MenuItemType {
  id: string;
  name: string;
  stock: number;
  price: number;
}

const Menu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);
  const [error, setError] = useState<string>("");
  const { orderItems, clearOrder } = useOrder(); // Assuming orderItems is typed in context
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const items = await getMenuItems();
      setMenuItems(items);
    } catch (err) {
      setError("Failed to load menu.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOrder = async () => {
    try {
      navigate("/success");
      await submitOrder(orderItems);
      clearOrder();
      await fetchData();
    } catch (err) {
      setError("Failed to place order.");
    }
  };

  const cancelOrder = useCallback(() => {
    clearOrder();
    navigate("/");
  }, [clearOrder, navigate]);

  const total = useMemo(() => {
    return orderItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [orderItems]);

  const isLoading = useMemo(() => {
    return menuItems.length === 0 && !error;
  }, [menuItems, error]);

  return (
    <Card>
      <div className="card-body">
        <h5 className="card-title fw-bold">My Order</h5>

        {error && <p className="text-danger">{error}</p>}
        {isLoading && <p>Loading menu...</p>}

        <ul
          className={`list-group list-group-flush ${styles["scrollable-y-hidden-scrollbar"]}`}
        >
          {menuItems.map((menu) => {
            return <MenuItem key={menu.name} {...menu} />;
          })}
        </ul>
      </div>

      <CardFooter>
        <div className={styles["cart-total"]}>
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <Button onClick={handleOrder} disabled={orderItems.length === 0}>
          Order
        </Button>
        <Button onClick={cancelOrder}>Cancel</Button>
      </CardFooter>
    </Card>
  );
};

export default Menu;
