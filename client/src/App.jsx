import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Homepage } from "./pages/homepage/Homepage";
import NavbarDesktop from "./components/navbar/NavbarDesktop";
import NavbarMobile from "./components/navbar/NavbarMobile";

function App() {
  return (
    <main className="App">
      <NavbarMobile />
      <Routes>
        <Route index element={<Homepage />} />
      </Routes>
    </main>
  );
}

export default App;
