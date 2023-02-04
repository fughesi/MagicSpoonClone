import "./Homepage.css";
import { setDarkMode } from "../../features/themeSlice";
import { useGetAllTestimonialsQuery } from "../../services/testimonialsApi";
import { useSelector, useDispatch } from "react-redux";
import CallToAction from "../../components/cta/CallToAction";
import { Link } from "react-router-dom";

export const Homepage = () => {
  const blur = useSelector((state) => state.theme.blur);
  const dark = useSelector((state) => state.theme.darkMode);

  const dispatch = useDispatch();

  const { data, error, isLoading, isError, isSuccess } = useGetAllTestimonialsQuery();

  const content = (
    <main className={`homePageContainer ${blur ? "blur" : ""}`}>
      <section className="homepage__section_1" aria-label="home page hero section">
        <h1>High protein cereal that tastes too good to be true.</h1>
        <CallToAction />
      </section>
      <section className="homepage__section_2" aria-label="home page hero section">
        <h4>Find Your Flavor</h4>

        <div className="carouselContainer">
          {new Array(22).fill({ title: "name" }).map((i, index) => {
            return (
              <div key={index} className="carouselElement">
                <div className="carouselDiv"></div>
                <p>{i.title}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="homepage__section_3" aria-label="home page hero section">
        {/* <p className="stringify">{isSuccess ? JSON.stringify(data) : error?.status}</p> */}
        <p>add testimonial carousel here</p>
      </section>
      <section className="homepage__section_4" aria-label="home page hero section">
        <div>
          <h3>High Protein</h3>
          <p>12g-14g complete protein in every bowl.</p>
        </div>
        <div>
          <h3>Keto-Friendly</h3>
          <p>4g-5g net carbs per bowl.</p>
        </div>
        <div>
          <h3>Sweet & Delicious</h3>
          <p>Tastes just like you remember, only better.</p>
        </div>
      </section>
      <section className="homepage__section_5" aria-label="home page hero section"></section>
      <section className="homepage__section_6" aria-label="home page hero section">
        <div>
          <h3>A whole world of flavor.</h3>
          <CallToAction />
        </div>
      </section>
      <section className="homepage__section_7" aria-label="home page hero section">
        <p>reviews carousel</p>
        <h3>
          Why did we grow up, <span className="outlinedText">but our cereal didn't?</span>
        </h3>
        ///add link to OUR STORY
      </section>
      <section className="homepage__section_8" aria-label="home page hero section">
        ////grid of 4 photos
      </section>
      <section className="homepage__section_9" aria-label="home page hero section">
        <h3>
          Happiness <span className="outlinedText">100% Guaranteed</span>
        </h3>
        <CallToAction />
        <Link to="/">
          <span className="smallText">SEE TERMS OF USE.</span>
        </Link>
      </section>
      <section className="homepage__section_10" aria-label="home page hero section">
        ////contact us ////socials
        <h4>Don't miss the magic:</h4>
        ///// email input Field ////// submit button with SUBSCRIBE text ///// logo
        <div className="legalText">
          {/* <link to="/">Terms of Use</link> · <link to="/">Privacy Policy</link> ·{" "}
          <link to="/">Accessibility Policy</link> · <link to="/">FAQ</link> · <link to="/">Become an Affiliate</link> ·
          <link to="/">Reviews</link> · <link to="/">Jobs</link> · <link to="/">Track Orders</link> ·
          <link to="/">Store Locator</link> · <link to="/">Terms of Service</link> · <link to="/">Refund Policy</link> ·{" "} */}
          <p className="copyrightText">&copy; 2023 Magic Spoon</p>
        </div>
      </section>
    </main>
  );

  return content;
};
