import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { cartReveal } from "../../features/themeSlice";
import "./CallToAction.css";

export default function CallToAction({ address, name, style }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const content = (
    <button className={`cta-btn ${style}`} onClick={() => (navigate(address || "/"), dispatch(cartReveal()))}>
      {name || `TRY NOW`}
    </button>
  );

  return content;
}
