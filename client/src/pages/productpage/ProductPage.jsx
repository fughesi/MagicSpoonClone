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

      <section className="productPageSection3">
        <div className="rotatingProductBackground">
          <img src={barzz} alt="rotating bar" />
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
