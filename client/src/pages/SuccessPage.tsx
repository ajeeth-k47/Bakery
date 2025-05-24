import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";

const Success: React.FC = () => {
  const navigate = useNavigate();

  const handleAnotherOrder = useCallback(() => {
    navigate("/order");
  }, [navigate]);

  return (
    <Card>
      <div className="card-body">
        <h5 className="fw-bold mb-3">Order received</h5>
        <div className="text-center mt-5 mb-3 px-3 py-4">
          <img
            className="img-fluid mb-4"
            src="/images/fireworks.png"
            alt="Fireworks celebrating order success"
            loading="lazy"
          />
          <h2 className="fw-bold mb-2">Thank you!</h2>
          <p className="text-black-50 mb-4">
            We have successfully received your order.
          </p>
        </div>
      </div>
      <div className="card-footer border-0">
        <Button onClick={handleAnotherOrder}>submit another order</Button>
      </div>
    </Card>
  );
};

export default Success;
