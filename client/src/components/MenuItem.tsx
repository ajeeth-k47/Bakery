import styles from "./MenuItem.module.scss";
import { useOrder } from "../store/orderContext";
import MenuItemImage from "./MenuItemImage";
import MenuItemInfo from "./MenuItemInfo";
import MenuItemControls from "./MenuItemControls";
import { useMemo } from "react";

interface MenuItemProps {
  name: string;
  stock: number;
  price: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, stock, price }) => {
  const { orderItems, addItem, removeItem } = useOrder();

  const quantity = useMemo(() => {
    return orderItems.find((item) => item.name === name)?.quantity || 0;
  }, [name, orderItems]);

  const isOutOfStock = stock === 0;
  const isAtMax = quantity >= stock;
  const isZero = quantity === 0;

  return (
    <li
      className={`${
        styles["menu-item"]
      } d-flex align-items-center py-3 px-2 border-bottom ${
        isOutOfStock ? styles["faded-item"] : ""
      }`}
    >
      <MenuItemImage name={name} />
      <MenuItemInfo name={name} price={price} stock={stock} />
      <MenuItemControls
        quantity={quantity}
        isZero={isZero}
        isAtMax={isAtMax}
        isOutOfStock={isOutOfStock}
        onAdd={() => addItem({ name, price })}
        onRemove={() => removeItem({ name })}
      />
    </li>
  );
};

export default MenuItem;
