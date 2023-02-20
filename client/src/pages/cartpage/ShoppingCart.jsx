import "./ShoppingCart.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ShoppingCart() {
  const content = (
    <main>
      <header>
        <Link to="/"> &gt; CONTINUE SHOPPING</Link>
        <h1>YOUR CART</h1>
      </header>
    </main>
  );

  return content;
}
