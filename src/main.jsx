import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import All from "./pages/product/All";
import DetailProduct from "./pages/product/DetailProduct";
import PaymentWay from "./pages/PaymentWay";
import Payment from "./pages/Payment";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Payment />
    </StrictMode>
);
