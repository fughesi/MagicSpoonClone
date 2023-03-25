import "./_links.css";
import React from "react";
import { Outlet } from "react-router-dom";

export default function Links() {
  const content = (
    <main className="linksLayoutContainer">
      <h1>Hello on links page!!</h1>

      <Outlet />
    </main>
  );

  return content;
}
