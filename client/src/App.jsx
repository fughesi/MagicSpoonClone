import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getWindowWidth } from "./features/themeSlice";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import { Homepage } from "./pages/homepage/Homepage";
import NavbarDesktop from "./components/navbar/NavbarDesktop";
import NavbarMobile from "./components/navbar/NavbarMobile";
import UsVersusThem from "./pages/usvsthempage/UsVersusThem";
import Darkmode from "./components/darkmode/Darkmode";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();

  const stopScroll = useSelector((state) => state.theme.navbarEngaged);

  const windowWidth = () => setWidth(window.innerWidth);
  window.addEventListener("resize", windowWidth);

  useEffect(() => {
    dispatch(getWindowWidth(width));
    return window.removeEventListener("resize", windowWidth);
  }, [width]);

  let content = (
    <main className={`App ${stopScroll ? "stopScroll" : ""}`}>
      {width < 500 ? <NavbarMobile /> : <NavbarDesktop />}
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/us-vs-them" element={<UsVersusThem />} />
      </Routes>
      {/* <Darkmode /> */}
    </main>
  );

  return content;
}

export default App;
