import "./Homepage.css";
import { useEffect, useState, useRef } from "react";
import { useGetAllTestimonialsQuery } from "../../services/testimonialsApi";
import { useGetAllCerealsQuery } from "../../services/cerealsApi";
import { useSelector, useDispatch } from "react-redux";
import CallToAction from "../../components/cta/CallToAction";
import { Link } from "react-router-dom";
import { img1, img2, img3, img4, img5, img6, img7 } from "../../assets/img/floatingCereal/__exports";
import cerealBoxBG from "../../assets/img/cereal-boxes.png";
import FooterMobile from "../../components/footer/FooterMobile";
import SpinningLogo from "../../assets/svg/SpinningLogo";

export const Homepage = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [observer, setObserver] = useState("");

  const blur = useSelector((state) => state.theme.blur);

  const dispatch = useDispatch();

  const { data: testimonials, error, isLoading, isError, isSuccess } = useGetAllTestimonialsQuery();
  const { data: cereal } = useGetAllCerealsQuery();

  const targetRef = useRef(null);

  useEffect(() => {
    const currentTarget = targetRef.current;

    const IO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setObserver("observer");
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.3 }
    );

    if (currentTarget) IO.observe(currentTarget);

    return () => {
      IO.unobserve(currentTarget);
    };
  }, [targetRef]);

  useEffect(() => {
    window.addEventListener("scroll", () => setOffsetY(window.pageYOffset));
    return window.removeEventListener("scroll", () => setOffsetY(window.pageYOffset));
  }, []);

  return (
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
        <p className="stringify">{isSuccess ? JSON.stringify(testimonials) : error?.status}</p>

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
          <img src={img1} alt="floating cereal" style={{ transform: `translateY(${offsetY * 0.03}px)` }} />
          <img src={img2} alt="floating cereal" style={{ transform: `translateY(${offsetY * 0.045}px)` }} />
          <img src={img3} alt="floating cereal" style={{ transform: `translateY(${offsetY * 0.05}px)` }} />
          <img src={img4} alt="floating cereal" style={{ transform: `translateY(${offsetY * 0.047}px)` }} />
          <img src={img5} alt="floating cereal" style={{ transform: `translateY(${offsetY * 0.053}px)` }} />
          <img src={img6} alt="floating cereal" style={{ transform: `translateY(${offsetY * 0.074}px)` }} />
          <img src={img7} alt="floating cereal" style={{ transform: `translateY(${offsetY * 0.04}px)` }} />
        </div>
      </section>
      <section className="homepage__section_5" aria-label="home page hero section">
        <SpinningLogo className="badge" />
      </section>
      <section className="homepage__section_6" aria-label="home page hero section">
        <div className={`worldOfFlavor ${observer}`} ref={targetRef}>
          <h3>
            A whole world <br /> of flavor.
          </h3>
          <CallToAction />
        </div>
        <img src={cerealBoxBG} alt="cereal boxes" />
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
        <FooterMobile />
      </section>
    </main>
  );
};
