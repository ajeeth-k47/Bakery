import styles from "./MenuItem.module.scss";

interface MenuItemInfoProps {
  name: string;
  price: number;
  stock: number;
}

const MenuItemInfo: React.FC<MenuItemInfoProps> = ({ name, price, stock }) => (
  <div className="flex-grow-1">
    <div className="fw-semibold">{name}</div>
    <div className="text-muted small mt-1 d-flex align-items-center gap-2">
      ${price.toFixed(2)}
      <span className={styles["stock-badge"]}>s {stock}</span>
    </div>
  </div>
);

export default MenuItemInfo;
