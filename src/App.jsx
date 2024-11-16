import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
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
