import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../../services/productsApi";

//images
import { img1, img2, img3, img4, img5, img6, img7 } from "../../assets/img/floatingCereal/__exports";
import cerealBoxBG from "../../assets/img/cereal-boxes.png";
import SpinningLogo from "../../assets/svg/SpinningLogo";

//components
import PhotoGrid from "../../components/photoGrid/PhotoGrid";
import TestimonialSlider from "../../components/testimonials/TestimonialSlider";
import Carousel from "../../components/carousel/Carousel";
import CallToAction from "../../components/cta/CallToAction";
import CTAsection from "../../components/cta-section/CTAsection";
import "./Homepage.css";

export default function Homepage() {
  const [offsetY, setOffsetY] = useState(0);
  const [observer, setObserver] = useState("");

  const blur = useSelector((state) => state.theme.blur);

  const targetRef = useRef(null);

  const { data: prods, error } = useGetAllProductsQuery();

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

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 100);
  }, []);

  const content = (
    <main className={`homePageContainer ${blur ? "blur" : ""}`}>
      <section className="homepageSection1" aria-label="home page hero section">
        <h1>High protein cereal that tastes too good to be true.</h1>
        <CallToAction />
      </section>
      <section className="homepageSection2" aria-label="home page hero section">
        <h4>Find Your Flavor</h4>
        <Carousel />
      </section>
      <section className="homepageSection3" aria-label="home page hero section">
        <TestimonialSlider />
      </section>
      <section className="homepageSection4" aria-label="home page hero section">
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
        <div>
          <img src={img1} alt="floating cereal" style={{ transform: `translateY(${offsetY * 0.03}px)` }} />
          <img src={img2} alt="floating cereal" style={{ transform: `translateY(${offsetY * 0.045}px)` }} />
          <img src={img3} alt="floating cereal" style={{ transform: `translateY(${offsetY * 0.05}px)` }} />
          <img src={img4} alt="floating cereal" style={{ transform: `translateY(${offsetY * 0.047}px)` }} />
          <img src={img5} alt="floating cereal" style={{ transform: `translateY(${offsetY * 0.053}px)` }} />
          <img src={img6} alt="floating cereal" style={{ transform: `translateY(${offsetY * 0.074}px)` }} />
          <img src={img7} alt="floating cereal" style={{ transform: `translateY(${offsetY * 0.04}px)` }} />
        </div>
      </section>
      <section className="homepageSection5" aria-label="home page hero section">
        <SpinningLogo className="badge" />
      </section>
      <section className="homepageSection6" aria-label="home page hero section">
        <div className={`worldOfFlavor ${observer}`} ref={targetRef}>
          <h3>
            A whole world <br /> of flavor.
          </h3>
          <CallToAction />
        </div>
        <img src={cerealBoxBG} alt="cereal boxes" />
      </section>
      <section className="homepageSection7" aria-label="home page hero section">
        //testimonials
        <h3>
          Why did we grow up,
          <br />
          <span className="outlinedText">but our cereal didn't?</span>
        </h3>
        <CallToAction name={"OUR STORY"} address={"/"} style={"buttonStyle1"} />
      </section>
      <section className="homepageSection8" aria-label="home page hero section">
        <PhotoGrid />
      </section>
      <section className="homepageSection9" aria-label="home page hero section">
        <CTAsection />
      </section>
      <section className="homepageSection10" aria-label="home page hero section">
        {JSON.stringify(prods)}
        {(error && console.log(error)) ||
          prods?.map((i, index) => {
            return (
              <div key={index}>
                <p>{i.category}</p>
                <p>{i.title}</p>
                <p>{i.price}</p>
                {/* {/* <img src={`http:localhost:5150/images/cereal/1675756651067.png`} alt="wef" /> */}
                <img src={i.thumbnail} alt="wef" />
              </div>
            );
          })}
      </section>
    </main>
  );

  return content;
}
