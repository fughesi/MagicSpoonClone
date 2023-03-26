import "./_links.css";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function Links() {
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
