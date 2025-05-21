import { ReactNode } from "react";

const CardFooter: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="card-footer border-0">{children}</div>;
};

export default CardFooter;
