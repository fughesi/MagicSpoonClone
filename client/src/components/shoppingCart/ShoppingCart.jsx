import "./ShoppingCart.css";
import { cartReveal } from "../../features/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import CallToAction from "../cta/CallToAction";
import { decrementItemQuantity, incrementItemQuantity, deleteItemFromCart } from "../../features/cartSlice";

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = useSelector((state) => state.cart.totalCartQuantity);
  const cartSubtotal = useSelector((state) => state.cart.totalCartAmount);
  const revealed = useSelector((state) => state.theme.cartReveal);
  const dispatch = useDispatch();

  const content = (
    <main
      className={`shoppingCartContainer ${revealed ? "shoppingCartReveal" : ""}  ${
        cartItems.length ? "itemsInCart" : ""
      }`}
    >
      <p onClick={() => dispatch(cartReveal())}> &lt; CONTINUE SHOPPING</p>
      <h1>YOUR CART</h1>

      <div className="cartDisplay">
        {cartItems.length ? (
          cartItems.map((i, index) => {
            return;
            <div key={index} className="cartDisplay">
              <img src={i.image} alt="photo of cereal product" />
              <div className="cartDisplayMiddle">
                <p>{i.title}</p>
                <div>
                  <button onClick={() => dispatch(decrementItemQuantity())}> - </button>

                  {i.quantity}

                  <button onClick={() => dispatch(incrementItemQuantity())}> + </button>
                </div>
                <div className="cartDisplayEnd">
                  <p onClick={() => dispatch(deleteItemFromCart())}> X </p>
                  <p>${cartItems.quantity}</p>
                </div>
              </div>
            </div>;
          })
        ) : (
          <>
            <h3>Your cart is empty!</h3> <p>Add your favorite items to your cart.</p>
          </>
        )}
      </div>

      <div className="shopNowButton">
        {cartItems.length ? (
          <div>
            <p>SUBTOTAL ({`${cartQuantity} ${cartQuantity > 1 ? "ITEMS" : "ITEM"}`})</p> <p>${cartSubtotal}</p>
          </div>
        ) : (
          ""
        )}
        <CallToAction name={"Shop Now"} style={"buttonStyle2"} navigate={"/"} />
      </div>
    </main>
  );

  return content;
}
