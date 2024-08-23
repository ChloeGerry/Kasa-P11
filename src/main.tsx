import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header/index.tsx";
import Footer from "./components/layout/Footer/index.tsx";
import Routing from "./Routing.tsx";
import "./style/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routing />
      <Header />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
