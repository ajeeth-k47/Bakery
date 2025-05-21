import React, { createContext, useContext, useReducer, ReactNode } from "react";

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

type Action =
  | { type: "ADD_ITEM"; payload: Omit<OrderItem, "quantity"> }
  | { type: "REMOVE_ITEM"; payload: Pick<OrderItem, "name"> }
  | { type: "CLEAR_ORDER" };

type OrderState = OrderItem[];

interface OrderContextType {
  orderItems: OrderState;
  addItem: (item: Omit<OrderItem, "quantity">) => void;
  removeItem: (item: Pick<OrderItem, "name">) => void;
  clearOrder: () => void;
}

// Create context with undefined default, to enforce provider usage
const OrderContext = createContext<OrderContextType | undefined>(undefined);

// Hook to use the context with safety check
export const useOrder = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};

const orderReducer = (state: OrderState, action: Action): OrderState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.find((item) => item.name === action.payload.name);
      if (existing) {
        return state.map((item) =>
          item.name === action.payload.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case "REMOVE_ITEM": {
      const existing = state.find((item) => item.name === action.payload.name);
      if (existing && existing.quantity > 1) {
        return state.map((item) =>
          item.name === action.payload.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return state.filter((item) => item.name !== action.payload.name);
    }
    case "CLEAR_ORDER":
      return [];
    default:
      return state;
  }
};

interface OrderProviderProps {
  children: ReactNode;
}

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [orderItems, dispatch] = useReducer(orderReducer, []);

  const addItem = (item: Omit<OrderItem, "quantity">) =>
    dispatch({ type: "ADD_ITEM", payload: item });

  const removeItem = (item: Pick<OrderItem, "name">) =>
    dispatch({ type: "REMOVE_ITEM", payload: item });

  const clearOrder = () => dispatch({ type: "CLEAR_ORDER" });

  return (
    <OrderContext.Provider
      value={{ orderItems, addItem, removeItem, clearOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
};
