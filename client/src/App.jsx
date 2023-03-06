import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getWindowWidth } from "./features/themeSlice";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import Darkmode from "./components/darkmode/Darkmode";
import { Homepage } from "./pages/homepage/Homepage";
import OurStory from "./pages/ourstorypage/OurStory";
import NavbarDesktop from "./components/navbar/NavbarDesktop";
import NavbarMobile from "./components/navbar/NavbarMobile";
import UsVersusThem from "./pages/usvsthempage/UsVersusThem";
import FooterMobile from "./components/footer/FooterMobile";
import FooterDesktop from "./components/footer/FooterDesktop";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import Login from "./components/login/Login";

import Testingbullshitdeletethis from "./testingbullshitdeletethis";

function App() {
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

  let content = (
    <main className={`App ${noscroll ? "stopScroll" : ""}`}>
      {width < 500 ? <NavbarMobile /> : <NavbarDesktop />}
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/us-vs-them" element={<UsVersusThem />} />
        <Route path="/our-story" element={<OurStory />} />
      </Routes>
      <ShoppingCart />
      <Login />

      {/* <Darkmode /> */}
      {width < 500 ? <FooterMobile /> : <FooterDesktop />}

      <Testingbullshitdeletethis />
    </main>
  );

  return content;
}

export default App;
