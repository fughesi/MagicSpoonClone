import Subscribe from "../subscribe/Subscribe";
import { Link } from "react-router-dom";
import MagicSpoonLogo from "../../assets/svg/MagicSpoonLogo";
import "./Footer.css";

export default function FooterMobile() {
  const content = (
    <div className="FooterMobileContainer">
      ////contact us ////socials
      <h4>Don't miss the magic:</h4>
      <Subscribe />
      <MagicSpoonLogo className="MagicSpoonLogo" />
      <div className="legalText">
        <Link to="/">Terms of Use</Link> · <Link to="/">Privacy Policy</Link> · <Link to="/">Accessibility Policy</Link>{" "}
        · <Link to="/">FAQ</Link> · <Link to="/">Become an Affiliate</Link> ·<Link to="/">Reviews</Link> ·{" "}
        <Link to="/">Jobs</Link> · <Link to="/">Track Orders</Link> ·<Link to="/">Store Locator</Link> ·{" "}
        <Link to="/">Terms of Service</Link> · <Link to="/">Refund Policy</Link>
        <p className="copyrightText">&copy; 2023 Magic Spoon</p>
      </div>
    </div>
  );

  return content;
}
