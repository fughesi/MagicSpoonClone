import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getWindowWidth } from "./features/themeSlice";
import { useDispatch } from "react-redux";

import "./App.css";

import { Homepage } from "./pages/homepage/Homepage";
import NavbarDesktop from "./components/navbar/NavbarDesktop";
import NavbarMobile from "./components/navbar/NavbarMobile";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();

  const windowWidth = () => setWidth(window.innerWidth);
  window.addEventListener("resize", windowWidth);

  useEffect(() => {
    dispatch(getWindowWidth(width));
    return window.removeEventListener("resize", windowWidth);
  }, [width]);

  let content = (
    <main className="App">
      {width < 500 ? <NavbarMobile /> : <NavbarDesktop />}
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
    </main>
  );

  return content;
}

export default App;
