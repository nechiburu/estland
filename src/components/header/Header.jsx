import React, { useState, useEffect } from "react"; // Importamos useEffect
import Scrollspy from "react-scrollspy";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Login from '../login';
import SignUp from '../registro';

const LoginPopup = ({ isSignUpView, toggleLoginPopup, toggleView }) => {
  return (
    <div className="login-popup">
      <div className="login-popup-content">
        {isSignUpView ? (
          <SignUp togglePopup={toggleLoginPopup} switchToLogin={toggleView} />
        ) : (
          <Login togglePopup={toggleLoginPopup} switchToSignUp={toggleView} />
        )}
      </div>
    </div>
  );
};

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);
  const logoSrc = navbar ? 'img/logo/logo2.png' : 'img/logo/logo1.png';
  const navigate = useNavigate();
  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate("/");
    window.location.reload();
  };

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const toggleLoginPopup = () => {
    setIsLoginPopupOpen(!isLoginPopupOpen);
  };
  const [isSignUpView, setIsSignUpView] = useState(false);
  const toggleView = () => {
    setIsSignUpView(!isSignUpView);
  };

  const changeBackground = () => {
    if (window.scrollY >= 71) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // Manejo del evento de scroll usando useEffect
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    // Limpieza: remover el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []); // El array vacío indica que este useEffect se ejecuta solo al montar y desmontar el componente

  return (
    <>
      {isLoginPopupOpen && <LoginPopup isSignUpView={isSignUpView} toggleLoginPopup={toggleLoginPopup} toggleView={toggleView} />}
      {/* Header */}
      <header className={navbar ? "main-header fixed-header" : "main-header"}>
        <nav className="container">
          <div className=" header-transparent">
            {/* Brand */}
            <NavLink to="/" onClick={handleLogoClick}>
              <img
                className="navbar-brand"
                src={logoSrc}
                alt="brand logo"
                style={{ width: 'auto', height: '37px' }}
              />
            </NavLink>
            {/* / */}
            {/* Mobile Toggle */}
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleClick}
            >
              <div className={click ? "hamburger active" : "hamburger"}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            {/* / */}
            {/* Top Menu */}
            <div
              className={
                click
                  ? "mobile-menu navbar-collapse justify-content-end active"
                  : "mobile-menu navbar-collapse justify-content-end"
              }
            >
              <Link to="/" className="sidebar-logo" onClick={handleLogoClick}>
                <img src={logoSrc} alt="brand" />
              </Link>
              <Scrollspy
                className="anchor_nav navbar-nav ml-auto"
                items={["home", "about", "services", "work", "blog", "contact"]}
                currentClassName="current"
                offset={-71}
              >
                <li>
                  <a className="nav-link" href="#home" onClick={handleClick}>
                    <span>Inicio</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#about" onClick={handleClick}>
                    <span>Nosotros</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    href="#services"
                    onClick={handleClick}
                  >
                    <span>Servicios</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#work" onClick={handleClick}>
                    <span>Portfolio</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#blog" onClick={handleClick}>
                    <span>Blog</span>
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#contact" onClick={handleClick}>
                    <span>Contacto</span>
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link"
                    href="#account"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleLoginPopup();
                    }}
                  >
                    <span>Cuenta</span>
                  </a>
                </li>
              </Scrollspy>
              <button
                className=" sidebar-bottom-closer"
                type="button"
                onClick={handleClick}
              >
                Close Sidebar
              </button>
            </div>
            {/* / */}
          </div>
          {/* Container */}
        </nav>
        {/* Navbar */}
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
