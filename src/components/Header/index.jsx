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
            <Navbar.Brand href="#">Plantopia</Navbar.Brand>
          </div>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
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
                  <Navbar.Brand href="#">Plantopia</Navbar.Brand>
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
