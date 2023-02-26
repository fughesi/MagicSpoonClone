import { useDispatch, useSelector } from "react-redux";
import { loginReveal } from "../../features/themeSlice";
import { useRef, useEffect } from "react";
import Footer from "../footer/FooterMobile";
import Subscribe from "../subscribe/Subscribe";
import "./Login.css";

export default function Login() {
  const revealed = useSelector((state) => state.theme.loginReveal);
  const width = useSelector((state) => state.theme.windowWidth);
  const dispatch = useDispatch();

  const inputRef = useRef();

  useEffect(() => {
    if (revealed) {
      return inputRef.current.focus();
    }
  }, [revealed]);

  const content = (
    <main className={`loginContainer ${revealed ? "loginReveal" : ""}`}>
      <p onClick={() => dispatch(loginReveal())}> &lt; CONTINUE SHOPPING</p>
      <section className="loginSection1">
        <h1>LOGIN</h1>
        <div className="loginButton">
          <Subscribe text={"Send login code (sends SMS and email)"} style={"subscribeStyle1"} ref={inputRef} />
        </div>
      </section>

      <section className="loginSection2">{width < 500 ? <Footer /> : ""}</section>
    </main>
  );

  return content;
}
