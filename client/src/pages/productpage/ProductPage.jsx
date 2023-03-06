import { useRef, useState, useEffect } from "react";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  imageMain,
  barzz,
  bgImg,
} from "../../assets/img/productCarousel/__exports";
import "./ProductPage.css";

export default function ProductPage({ type, style }) {
  const productPhotoArray = [img1, img2, img3, img4, img5, img6, img7, img8];

  const [observer, setObserver] = useState("");
  const rotateTarget = useRef();

  useEffect(() => {
    const currentTarget = rotateTarget.current;

    const rotateIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setObserver("rotationalObserver");
        });
      },
      { root: null, margin: "0px", threshold: 0.3 }
    );

    if (currentTarget) rotateIO.observe(currentTarget);

    return rotateIO.unobserve(currentTarget);
  }, [rotateTarget]);

  const content = (
    <main className="productPageContainer">
      <section className="productPageSection1">
        <div className="heroImageProducts">
          <img src={imageMain} alt="Cereal boxes and bars" />
        </div>
        <div className="productCircles">
          {productPhotoArray.map((i, index) => {
            return <img src={i} alt="product in circle" key={index} />;
          })}
        </div>
      </section>

      <section className="productPageSection2">
        <div className="productCartDiv">
          <h3>CEREAL & BARS COMBO BUNDLE</h3>
          <h4>4 CEREAL BOXES + 8 CEREAL BARS</h4>
          <pre>⭐️⭐️⭐️⭐️⭐️ 39261 Reviews</pre>
          <p>
            Get the best of both worlds—10g of protein in your pocket, and the nostalgic flavors of your childhood
            mornings back in your bowl. Take our cereal bars wherever you go with two classic flavors, Cookies & Cream
            and Cocoa Peanut Butter, and enjoy our cereal in four bestselling flavors.
          </p>
          <div className="productSelectionDiv">
            <label htmlFor="productSelect">
              CHOOSE FLAVORS <br />
            </label>
            <select name="productSelect" id="productSelect" type="select">
              <option value="" selected>
                CEREAL BARS AND COMBO BUNDLES &nbsp;&nbsp;&nbsp; ➢
              </option>
              <optgroup label="best-sellers">
                <option value="berry">BERRY </option>
                <option value="fruity">FRUITY</option>
                <option value="pebbles">PEBBLES</option>
              </optgroup>
              <optgroup label="nastiest-tasting">
                <option value="grapefruit">GRAPEFRUIT</option>
                <option value="banana">BANANA</option>
              </optgroup>
            </select>
            <br />
            <p>
              <span className="priceCut">$59</span>&nbsp; $54
            </p>

            <div className="addQuantityCart">
              <div>
                <p>QUANTITY</p>
                <p>
                  <span onClick={() => console.log("clicked")}> &lt; </span>
                  {"0"} <span onClick={() => console.log("clicked")}> &gt;</span>
                </p>
              </div>
              <div>
                <p onClick={() => console.log("clicked")}>ADD TO CART</p>
              </div>
            </div>
          </div>
          <p id="tryRiskFree">Try risk-free, 100% happiness guaranteed. See terms of use.</p>
        </div>
      </section>

      <section className="productPageSection3">
        <div className="rotatingProductBackground">
          <img src={barzz} alt="rotating bar" className={observer} ref={rotateTarget} />
        </div>

        <div className="productInformationGrid">
          <div className="productInformationBlock">
            <h3>
              HIGH <br />
              PROTEIN
            </h3>
            <p>10-14g complete protein per serving.</p>
          </div>
          <div className="productInformationBlock">
            <h3>
              GLUTEN <br />
              FREE
            </h3>
            <p>No gluten-containing ingredients.</p>
          </div>
          <div className="productInformationBlock">
            <h3>
              KETO- <br />
              FRIENDLY
            </h3>
            <p>4-5g net carbs per serving.</p>
          </div>
          <div className="productInformationBlock">
            <h3>
              GRAIN <br />
              FREE
            </h3>
            <p>No wheat, rice, or soy.</p>
          </div>
          <div className="productInformationBlock">
            <h3>
              0-1G <br />
              SUGAR
            </h3>
            <p>No cane sugar, corn syrup, or sugar alcohols.</p>
          </div>
          <div className="productInformationBlock">
            <h3>
              NATURAL <br />
              FLAVORS
            </h3>
            <p>No artificial colors or sweeteners.</p>
          </div>
        </div>
      </section>
      <section className="productPageSection4">
        <h3 className="usVSthem">US VS. THEM</h3>

        <p>How does our cereal stack up to the "classics"?</p>
      </section>
    </main>
  );

  return content;
}
