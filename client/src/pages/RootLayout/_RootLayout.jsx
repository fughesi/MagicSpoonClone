import "./_RootLayout.css";
import { Outlet } from "react-router-dom";

import { useState, useEffect } from "react";
import { getWindowWidth } from "../../features/themeSlice";
import { useDispatch, useSelector } from "react-redux";

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
      <Outlet />
    </main>
  );
}
