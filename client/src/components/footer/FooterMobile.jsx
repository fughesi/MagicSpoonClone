import { Link } from "react-router-dom";
import Subscribe from "../subscribe/Subscribe";
import CallToAction from "../cta/CallToAction";
import MagicSpoonLogo from "../../assets/svg/MagicSpoonLogo";
import InstagramLogo from "../../assets/svg/InstagramLogo";
import TwitterLogo from "../../assets/svg/TwitterLogo";
import FacebookLogo from "../../assets/svg/FacebookLogo";
import "./Footer.css";

export default function FooterMobile() {
  const content = (
    <div className="FooterMobileContainer">
      <CallToAction address={"/"} name={"CONTACT US"} style={"buttonStyle1"} />
      <div className="socialsSVGContainer">
        <InstagramLogo className="socialsSVG" />
        <FacebookLogo className="socialsSVG" />
        <TwitterLogo className="socialsSVG" />
      </div>
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
