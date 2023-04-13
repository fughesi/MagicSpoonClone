import { Outlet } from "react-router-dom";

import { useState, useEffect } from "react";
import { getWindowWidth } from "../../features/themeSlice";
import { useDispatch, useSelector } from "react-redux";

import NavbarDesktop from "../../components/navbar/NavbarDesktop";
import NavbarMobile from "../../components/navbar/NavbarMobile";
import FooterMobile from "../../components/footer/FooterMobile";
import FooterDesktop from "../../components/footer/FooterDesktop";
import ShoppingCart from "../../components/shoppingCart/ShoppingCart";
import Login from "../../components/login/Login";

// import Register from "../components/register/Register";
import TestingDELETEthis from "../testingDELETEthis";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";

export default function RootLayout() {
  const [width, setWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();

  const stopScroll = useSelector((state) => state.theme.navbarEngaged);
  const stopScroll2 = useSelector((state) => state.theme.loginReveal);
  const stopScroll3 = useSelector((state) => state.theme.cartReveal);
  const noscroll = [stopScroll, stopScroll2, stopScroll3].some(Boolean);

  const windowWidth = () => setWidth(window.innerWidth);
  window.addEventListener("resize", windowWidth);

  useEffect(() => {
    dispatch(getWindowWidth(width));
    return window.removeEventListener("resize", windowWidth);
  }, [width]);

  return (
    <main className={`App ${noscroll ? "stopScroll" : ""}`}>
      {width < 500 ? (
        <NavbarMobile />
      ) : (
        <>
          <NavbarDesktop /> <Breadcrumbs />
        </>
      )}

      <Outlet />

      <ShoppingCart />
      <Login />

      {width < 500 ? <FooterMobile /> : <FooterDesktop />}

      {/* <Darkmode /> */}
      {/* <Register /> */}
      <TestingDELETEthis />
    </main>
  );
}
