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
import { Link, NavLink } from "react-router-dom";
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
            <NavLink to="/us-vs-them" className={({ isActive }) => (isActive ? "activatedLink" : "")}>
              US VS. THEM
            </NavLink>
          </li>

          <li>
            <NavLink to="/our-story" className={({ isActive }) => (isActive ? "activatedLink" : "")}>
              OUR STORY
            </NavLink>
          </li>
          <li>
            <NavLink to="/bundles" className={({ isActive }) => (isActive ? "activatedLink" : "")}>
              BUNDLES
            </NavLink>
          </li>
          <li>
            <NavLink to="/cereal" className={({ isActive }) => (isActive ? "activatedLink" : "")}>
              CEREAL
            </NavLink>
          </li>
          <li>
            <NavLink to="/bars" className={({ isActive }) => (isActive ? "activatedLink" : "")}>
              BARS
            </NavLink>
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
