import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HomePageLayout from "../layouts/HomeLayout";
import Button from "../components/UI/Button";
import CardFooter from "../components/UI/CardFooter";
import Card from "../components/UI/Card";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToOrder = useCallback(() => {
    navigate("/order");
  }, [navigate]);

  return (
    <HomePageLayout>
      <Card>
        <h5 className="pt-4 text-black-50 fw-bold">Welcome to our Bakery!</h5>
        <CardFooter>
          <Button onClick={handleGoToOrder}>Make an Order</Button>
        </CardFooter>
      </Card>
    </HomePageLayout>
  );
};

export default Home;
