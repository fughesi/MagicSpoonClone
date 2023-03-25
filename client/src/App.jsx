import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getWindowWidth } from "./features/themeSlice";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import Darkmode from "./components/darkmode/Darkmode";
import Homepage from "./pages/homepage/Homepage";
import FAQ from "./pages/faqpage/FAQpage";
import OurStory from "./pages/ourstorypage/OurStory";
import NavbarDesktop from "./components/navbar/NavbarDesktop";
import NavbarMobile from "./components/navbar/NavbarMobile";
import UsVersusThem from "./pages/usvsthempage/UsVersusThem";
import FooterMobile from "./components/footer/FooterMobile";
import FooterDesktop from "./components/footer/FooterDesktop";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import ProductPage from "./pages/productpage/ProductPage";
import Login from "./components/login/Login";

import Links from "./pages/__links/links";
// import FAQ from "./pages/__links/FAQ.jsx";
import TOS from "./pages/__links/TOS.jsx";
import Jobs from "./pages/__links/Jobs.jsx";
import Reviews from "./pages/__links/Reviews.jsx";
import TermsOfUse from "./pages/__links/TermsOfUse.jsx";
import TrackOrders from "./pages/__links/TrackOrders.jsx";
import RefundPolicy from "./pages/__links/RefundPolicy.jsx";
import StoreLocator from "./pages/__links/StoreLocator.jsx";
import Accessibility from "./pages/__links/Accessibility.jsx";
import PrivacyPolicy from "./pages/__links/PrivacyPolicy.jsx";
import BecomeAnAffiliate from "./pages/__links/BecomeAnAffiliate.jsx";

import Register from "./components/register/Register";

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
        <Route path="/bundles" element={<ProductPage type={"bundles"} style={"bundles"} />} />
        <Route path="/cereal" element={<ProductPage type={"cereal"} style={"cereal"} />} />
        <Route path="/bars" element={<ProductPage type={"bars"} style={"bars"} />} />
        <Route path="/FAQ" element={<FAQ />} />
        {/* <Route path="/links" element={<Links />} /> */}
      </Routes>
      <Routes>
        <Route path="/links" element={<h1>Hello</h1>}>
          <Route path="FAQ" element={FAQ} />
          <Route path="TOS" element={TOS} />
          <Route path="Jobs" element={Jobs} />
          <Route path="Reviews" element={Reviews} />
          <Route path="TermsOfUse" element={TermsOfUse} />
          <Route path="TrackOrders" element={TrackOrders} />
          <Route path="RefundPolicy" element={RefundPolicy} />
          <Route path="StoreLocator" element={StoreLocator} />
          <Route path="Accessibility" element={Accessibility} />
          <Route path="PrivacyPolicy" element={PrivacyPolicy} />
          <Route path="BecomeAnAffiliate" element={BecomeAnAffiliate} />
        </Route>
      </Routes>

      <ShoppingCart />
      <Login />

      {/* {width < 500 ? <FooterMobile /> : <FooterDesktop />} */}

      {/* <Darkmode /> */}
      {/* <Register /> */}
    </main>
  );

  return content;
}

export default App;
