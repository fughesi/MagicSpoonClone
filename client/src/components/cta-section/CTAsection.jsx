import CallToAction from "../cta/CallToAction";
import { Link } from "react-router-dom";
import "./CTAsection.css";

export default function CTAsection({ text, strokeText }) {
  const content = (
    <div className="CTAsection">
      <h3>
        {text || "Happiness"} <span className="outlinedText">{strokeText || "100% Guaranteed"}</span>
      </h3>
      <CallToAction />
      <Link to="/">SEE TERMS OF USE.</Link>
    </div>
  );

  return content;
}
