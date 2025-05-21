import React from "react";
import Button from "./UI/Button";

interface MenuItemControlsProps {
  quantity: number;
  isZero: boolean;
  isAtMax: boolean;
  isOutOfStock: boolean;
  onAdd: () => void;
  onRemove: () => void;
}

const MenuItemControls: React.FC<MenuItemControlsProps> = ({
  quantity,
  isZero,
  isAtMax,
  isOutOfStock,
  onAdd,
  onRemove,
}) => (
  <div className="d-flex align-items-center gap-2">
    <span className="fw-semibold">{quantity}</span>
    <Button
      className={isZero ? "btn-disabled" : ""}
      disabled={isZero}
      onClick={onRemove}
      variant="circular-button"
    >
      −
    </Button>
    <Button
      className={isOutOfStock || isAtMax ? "btn-disabled" : ""}
      disabled={isOutOfStock || isAtMax}
      onClick={onAdd}
      variant="circular-button"
    >
      +
    </Button>
  </div>
);

export default MenuItemControls;
