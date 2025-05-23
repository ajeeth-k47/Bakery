import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HomePageLayout from "../layouts/HomeLayout";
import Button from "../components/UI/Button";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToOrder = useCallback(() => {
    navigate("/order");
  }, [navigate]);

  return (
    <HomePageLayout>
      <div>
        <p className="h6 text-white">Welcome to our Bakery!</p>
        <Button onClick={handleGoToOrder}>Make an Order</Button>
      </div>
    </HomePageLayout>
  );
};

export default Home;
