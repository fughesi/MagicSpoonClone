import { useDispatch } from "react-redux";
import { blur } from "../../features/themeSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const NavbarMobile = () => {
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();

  const content = (
    <nav className="nav-mobile__container">
      <section
        className="hamburger-section"
        aria-label="hamburger bar for toggling menu"
        onClick={() => (setToggle((i) => !i), dispatch(blur()))}
      >
        <div className={`hamburger-element ${toggle ? "menu-open" : ""}`}></div>

        <ul className={`mobile-nav-menu ${toggle ? "" : "hide"}`}>
          <li name="MENU">
            <Link to="/">MENU</Link>
          </li>
          <li name="THINGS">
            <Link to="/">THINGS</Link>
          </li>
          <li>
            <Link to="/">STUFF</Link>
          </li>
          <li>
            <Link to="/">MORE STUFF</Link>
          </li>
          <li>
            <Link to="/">MORE THINGS</Link>
          </li>
        </ul>
      </section>

      <section className="title-logo__link" aria-label="home page link with logo as button">
        <Link to="/">
          <h1>MAGIC SPOON</h1>
        </Link>
      </section>

      <section className="cart_signup" aria-label="shopping cart element and signup link">
        cart
      </section>
    </nav>
  );

  return content;
};

export default NavbarMobile;
