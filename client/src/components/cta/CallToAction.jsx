import { useNavigate } from "react-router-dom";
import "./CallToAction.css";

export default function CallToAction({ address, name, style }) {
  const navigate = useNavigate();

  const content = (
    <button className={`cta-btn ${style}`} onClick={() => navigate(address || "/")}>
      {name || "TRY NOW"}
    </button>
  );

  return content;
}
