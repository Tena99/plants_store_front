import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import { Outlet } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
