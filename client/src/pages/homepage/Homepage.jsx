import "./Homepage.css";
import { useEffect, useState, useRef, useMemo } from "react";
import { setDarkMode } from "../../features/themeSlice";
import { useGetAllTestimonialsQuery } from "../../services/testimonialsApi";
import { useGetAllCerealsQuery } from "../../services/cerealsApi";
import { useSelector, useDispatch } from "react-redux";
import CallToAction from "../../components/cta/CallToAction";
import { Link } from "react-router-dom";
import { img1, img2, img3, img4, img5, img6, img7 } from "../../assets/img/floatingCereal/__exports";

export const Homepage = () => {
  const blur = useSelector((state) => state.theme.blur);
  const dark = useSelector((state) => state.theme.darkMode);

  const dispatch = useDispatch();

  const { data, error, isLoading, isError, isSuccess } = useGetAllTestimonialsQuery();
  const { data: cereal } = useGetAllCerealsQuery();

  const targetRef = useRef(null);

  const [viz, setViz] = useState(false);

  const callBack = (entries) => {
    //first argument to intersectionalObserver
    entries.forEach((i) => {
      setViz((prev) => (prev = i.isIntersecting));
    });
  };
  const options = useMemo(() => {
    //second argument to intersectionalObserver
    return { root: null, rootMargin: "0px", threshold: 0.3 };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);

    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef]);

  const content = (
    <main className={`homePageContainer ${blur ? "blur" : ""}`}>
      <section className="homepage__section_1" aria-label="home page hero section">
        <h1>High protein cereal that tastes too good to be true.</h1>
        <CallToAction />
      </section>
      <section className="homepage__section_2" aria-label="home page hero section">
        <h4>Find Your Flavor</h4>

        <div className="carouselContainer">
          {cereal &&
            cereal.map((i) => {
              return (
                <div key={i._id} className="carouselElement">
                  <div className="carouselDiv">
                    <img src={i.image.data} alt="photo of cereal" />
                    {/* <img src={`data:image/png;base64,${i.image.data.toString("base64")}`} alt="photo of cereal" /> */}
                  </div>
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
        <div className="floatingCereal">
          <img1 />
          <img2 />
          {/* <img src={img1} alt="floating cereal" />
          <img src={img2} alt="floating cereal" />
          <img src={img3} alt="floating cereal" />
          <img src={img4} alt="floating cereal" />
          <img src={img5} alt="floating cereal" />
          <img src={img6} alt="floating cereal" />
          <img src={img7} alt="floating cereal" /> */}
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
