import { useDispatch, useSelector } from "react-redux";
import MagicSpoonLogo from "../../assets/svg/MagicSpoonLogo";
import SpinningLogo from "../../assets/svg/SpinningLogo";
import { blur, navbar } from "../../features/themeSlice";
import {
  addItemToCart,
  decrementItemQuantity,
  incrementItemQuantity,
  deleteItemFromCart,
  clearCart,
} from "../../features/cartSlice";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavbarMobile = () => {
  const toggle = useSelector((state) => state.theme.navbarEngaged);

  const dispatch = useDispatch();

  const content = (
    <nav className={`nav-mobile__container ${toggle ? "fixedMenuPosition" : ""}`}>
      <section
        className="hamburger-section"
        aria-label="hamburger bar for toggling menu"
        onClick={() => (dispatch(blur()), dispatch(navbar()))}
      >
        <div className={`hamburger-element ${toggle ? "menu-open" : ""}`}></div>

        <ul className={`mobile-nav-menu ${toggle ? "" : "hide"}`}>
          <li>
            <Link to="/us-vs-them">US VS. THEM</Link>
          </li>
          <li>
            <Link to="/us-vs-them">OUR STORY</Link>
          </li>
          <li>
            <Link to="/us-vs-them">BUNDLES</Link>
          </li>
          <li>
            <Link to="/us-vs-them">CEREAL</Link>
          </li>
          <li>
            <Link to="/us-vs-them">BARS</Link>
          </li>
          <SpinningLogo className="logoSpinMenu" />
        </ul>
      </section>

      <section className="title-logo__link" aria-label="home page link with logo as button">
        <Link to="/">
          <MagicSpoonLogo className="MagicSpoonLogo" style={{ fill: "var(--color1)" }} />
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
