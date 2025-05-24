// client/src/App.tsx

import "./styles/global.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Order from "./pages/OrderPage";
import Success from "./pages/SuccessPage";
import { ROUTES } from "./constants/routes";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ORDER} element={<Order />} />
        <Route path={ROUTES.SUCCESS} element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;
