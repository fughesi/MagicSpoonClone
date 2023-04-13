import "./_LinksLayout.css";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import NavbarDesktop from "../../components/navbar/NavbarDesktop";
import NavbarMobile from "../../components/navbar/NavbarMobile";
import FooterMobile from "../../components/footer/FooterMobile";
import FooterDesktop from "../../components/footer/FooterDesktop";
import ShoppingCart from "../../components/shoppingCart/ShoppingCart";
import Login from "../../components/login/Login";
import { getWindowWidth } from "../../features/themeSlice";
export default function Links() {
  const dispatch = useDispatch();

  const [width, setWidth] = useState(window.innerWidth);

  const windowWidth = () => setWidth(window.innerWidth);
  window.addEventListener("resize", windowWidth);

  useEffect(() => {
    dispatch(getWindowWidth(width));
    return window.removeEventListener("resize", windowWidth);
  }, [width]);

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 100);
  }, []);

  const content = (
    <main className="linksLayoutContainer">
      <h1>Hello on links page!!</h1>

      <Outlet />
    </main>
  );

  return content;
}
