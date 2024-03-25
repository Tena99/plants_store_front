import "./App.css";

import { useState } from "react";
import { Outlet } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <button
          disabled={i18next.language === "en"}
          onClick={() => i18next.changeLanguage("en")}
        >
          EN
        </button>
        <button
          disabled={i18next.language === "de"}
          onClick={() => i18next.changeLanguage("de")}
        >
          DE
        </button>
      </div>

      <Outlet />
    </>
  );
}

export default App;
