import "./styles.css";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { UserContext } from "../../../Context/createContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  const { user, logout } = useContext(UserContext);

  return (
    <>
      <Navbar expand={"md"} className="bg-white m-3">
        <Container fluid>
          <div className="d-md-none d-flex align-items-center">
            <div>
              {i18next.language === "en" ? (
                <Button
                  variant="success"
                  className="lang_btn"
                  onClick={() => i18next.changeLanguage("de")}
                >
                  EN
                </Button>
              ) : (
                <Button
                  variant="success"
                  className="lang_btn"
                  onClick={() => i18next.changeLanguage("en")}
                >
                  DE
                </Button>
              )}
            </div>
            <Navbar.Brand href="/">Plantopia</Navbar.Brand>
          </div>

          <div className="d-flex">
            <Link to={"/cart"} className="d-md-none d-inline me-3 cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </Link>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          </div>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-between flex-grow-1 pe-3">
                <div className="d-md-flex d-none align-items-center">
                  <div>
                    {i18next.language === "en" ? (
                      <Button
                        variant="success"
                        className="lang_btn"
                        onClick={() => i18next.changeLanguage("de")}
                      >
                        EN
                      </Button>
                    ) : (
                      <Button
                        variant="success"
                        className="lang_btn"
                        onClick={() => i18next.changeLanguage("en")}
                      >
                        DE
                      </Button>
                    )}
                  </div>
                  <Navbar.Brand href="/">Plantopia</Navbar.Brand>
                </div>

                <div className="d-md-flex  justify-content-md-between">
                  <Link to="/" className="me-lg-5 me-3 nav-link">
                    {t("nav.Home")}
                  </Link>
                  <Link to="/about" className="me-lg-5 me-3 nav-link">
                    {t("nav.About")}
                  </Link>
                  <Link to="/products" className="me-lg-5 me-3 nav-link">
                    {t("nav.Products")}
                  </Link>
                </div>
                <div className="d-md-flex justify-content-md-around w-25 align-items-center">
                  {user ? (
                    <>
                      <p className="m-0 d-md-inline d-none welcome_msg">
                        Hi {user.nickname}!
                      </p>

                      <Link to={"/cart"} className="d-md-inline d-none cart">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-cart-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                        </svg>
                      </Link>
                      <Button className="btn-outline-success" onClick={logout}>
                        Log out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="nav-link">
                        {t("nav.SignIn")}
                      </Link>
                      <Link to="/sign" className="nav-link">
                        {t("nav.SignUp")}
                      </Link>
                    </>
                  )}
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
