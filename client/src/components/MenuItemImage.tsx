import styles from "./MenuItem.module.scss";

interface MenuItemImageProps {
  name: string;
}

const MenuItemImage: React.FC<MenuItemImageProps> = ({ name }) => (
  <img
    src={`/images/${name.toLowerCase()}.png`}
    alt={name}
    className={`${styles["menu-item-img"]} me-3`}
  />
);

export default MenuItemImage;
