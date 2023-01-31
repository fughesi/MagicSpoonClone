import { useNavigate } from "react-router-dom";
import "./CallToAction.css";

export default function CallToAction({ name }) {
  const navigate = useNavigate();

  const content = (
    <button className="cta-btn" onClick={() => navigate("/")}>
      {name}
    </button>
  );

  return content;
}
