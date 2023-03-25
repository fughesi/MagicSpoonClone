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
        <Link to="/links/TermsOfUse">Terms of Use</Link> · <Link to="/links/Privacy">Privacy Policy</Link> ·{" "}
        <Link to="/links/Accessibility">Accessibility Policy</Link> · <Link to="/links/FAQ">FAQ</Link> ·{" "}
        <Link to="/links/BecomeAnAffiliate">Become an Affiliate</Link> ·<Link to="/links/Reviews">Reviews</Link> ·{" "}
        <Link to="/links/Jobs">Jobs</Link> · <Link to="/links/TrackOrders">Track Orders</Link> ·
        <Link to="/links/StoreLocator">Store Locator</Link> · <Link to="/links/TOS">Terms of Service</Link> ·{" "}
        <Link to="/links/RefundPolicy">Refund Policy</Link>
        <p className="copyrightText">&copy; 2023 Magic Spoon</p>
      </div>
    </div>
  );

  return content;
}
