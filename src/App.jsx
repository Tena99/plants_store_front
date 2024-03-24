import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <p className="read-the-docs">{t("Welcome")}</p>
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
    </>
  );
}

export default App;
