import "./styles.css";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

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
            <Navbar.Brand href="#">Plants</Navbar.Brand>
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
                  <Navbar.Brand href="#">Plants</Navbar.Brand>
                </div>

                <div className="d-md-flex  justify-content-md-between">
                  <Nav.Link href="/" className="me-lg-5 me-3">
                    {t("nav.Home")}
                  </Nav.Link>
                  <Nav.Link href="/about" className="me-lg-5 me-3">
                    {t("nav.About")}
                  </Nav.Link>
                  <Nav.Link href="/products" className="me-lg-5 me-3">
                    {t("nav.Products")}
                  </Nav.Link>
                </div>
                <div className="d-md-flex justify-content-md-around w-25">
                  <Nav.Link href="/login">{t("nav.Login")}</Nav.Link>
                  <Nav.Link href="/sign">{t("nav.Sign")}</Nav.Link>
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
