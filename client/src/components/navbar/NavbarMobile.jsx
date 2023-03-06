import { useDispatch, useSelector } from "react-redux";
import MagicSpoonLogo from "../../assets/svg/MagicSpoonLogo";
import SpinningLogo from "../../assets/svg/SpinningLogo";
import { blur, navbar } from "../../features/themeSlice";
import { cartReveal, loginReveal } from "../../features/themeSlice";
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
    <nav className={`navMobileContainer ${toggle ? "fixedMenuPosition" : ""}`}>
      <section
        className="hamburgerSection"
        aria-label="hamburger bar for toggling menu"
        onClick={() => (dispatch(blur()), dispatch(navbar()))}
      >
        <div className={`hamburgerElement ${toggle ? "menuOpen" : ""}`}></div>

        <ul className={`mobileNavMenu ${toggle ? "" : "hide"}`}>
          <li>
            <Link to="/us-vs-them">US VS. THEM</Link>
          </li>
          <li>
            <Link to="/our-story">OUR STORY</Link>
          </li>
          <li>
            <Link to="/bundles">BUNDLES</Link>
          </li>
          <li>
            <Link to="/cereal">CEREAL</Link>
          </li>
          <li>
            <Link to="/bars">BARS</Link>
          </li>
          <SpinningLogo className="logoSpinMenu" />
        </ul>
      </section>

      <section className="titleLogoLink" aria-label="home page link with logo as button">
        <Link to="/">
          <MagicSpoonLogo className="MagicSpoonLogo" style={{ fill: "var(--color1)" }} />
        </Link>
      </section>

      <section className="cartSignup" aria-label="shopping cart element and signup link">
        <p onClick={() => dispatch(loginReveal())}>LOGIN</p>
        <p onClick={() => dispatch(cartReveal())}>CART</p>
      </section>
    </nav>
  );

  return content;
};

export default NavbarMobile;
