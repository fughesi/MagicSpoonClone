import { useState, useEffect } from "react";
import { nutrition } from "../../assets/img/cerealNutrition/__exports";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CallToAction from "../../components/cta/CallToAction";
import Modal from "../../components/modal/Modal";
import {
  addItemToCart,
  decrementItemQuantity,
  incrementItemQuantity,
  deleteItemFromCart,
  clearCart,
  getTotals,
} from "../../features/cartSlice";
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

  const [productModal, setProductModal] = useState(false);

  const dispatch = useDispatch();

  const toggleModal = () => {
    setProductModal((i) => !i);
  };

  const [rotatePic, setRotatePic] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => setRotatePic(window.pageYOffset));
    return window.removeEventListener("scroll", () => setRotatePic(window.pageYOffset));
  }, []);

  const content = (
    <main className="productPageContainer">
      <Modal productModal={productModal} handleClick={toggleModal} />
      {/* <Modal toggleModal={toggleModal} /> */}
      <section className="productPageSection1">
        <div className="heroImageProducts">
          <img src={imageMain} alt="Cereal boxes and bars" />
        </div>
        <div className="productCircles">
          {productPhotoArray.map((i, index) => {
            return <img src={i} alt="product in circle" key={index} onClick={toggleModal} />;
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
              <option value="" defaultValue>
                CEREAL BARS AND COMBO BUNDLES &nbsp;&nbsp;&nbsp; ➢
              </option>
              <optgroup label="best-sellers">
                <option value="berry">BERRY</option>
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
              <kbd className="priceCut">$59</kbd>&nbsp; $54
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
          <img src={barzz} alt="rotating bar" style={{ rotate: `${rotatePic * -0.09 + 55}deg` }} />
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
        <img src={nutrition} alt="nutrition chart" />
        <div className="nutritionButton">
          <CallToAction name={"NUTRITIONAL PANEL"} />
        </div>
      </section>
      <section className="productPageSection5">
        <h3 className="whatSpoonersSaying">WHAT SPOONERS ARE SAYING</h3>
        <div className="ratingReview">
          <p>4.8</p>
          <p>⭐️⭐️⭐️⭐️⭐️</p>
          <p>Based on 39248 reviews</p>
        </div>
      </section>
      <section className="productPageSection6">
        <h3 className="FAQtitle">FREQUENTLY ASKED QUESTIONS</h3>
        <details>
          <summary>What kind of sorcery is this? Where did all the carbs and sugar go?</summary>We spent over a year
          working through hundreds of formulations in a quest to recreate our favorite childhood cereals that wouldn't
          give us a sugar crash. We eventually figured out a way to include all of the good stuff you want—like protein
          and healthy fats—without any of the high sugar you don’t. Magic Spoon contains 0g sugar across most flavors,
          and 1g of sugar in Honey Nut.
        </details>
        <details>
          <summary>Is this cereal keto-friendly?</summary>Yes. Magic Spoon is perfect for anyone on a ketogenic or low
          carb diet. Each serving has 4g net carbs, and 0.5-1.5g saturated fats from a blend of high-oleic sunflower oil
          and avocado oil. <br />
          <br />
          In fact, one of the reasons we created this in the first place is that we couldn’t find a cereal to fit into
          our low carb lifestyles, and we missed our childhood cereals more than anything else (yes, even pizza).
        </details>
        <details>
          <summary>What are net carbs?</summary>Not all carbs are created equal. Fiber and (most) natural sweeteners
          don’t affect your blood sugar, so they’re stripped out to get “net carbs,” which you can think of as the
          active carbs that affect your body.
          <br />
          <br />
          In our case, net carbs = total carbs - allulose - fiber.
        </details>
        <details>
          <summary>Do kids eat/like Magic Spoon?</summary>Yep! Kids love Magic Spoon because it tastes just like their
          sugary favorites, and you’ll love it because you know they’re getting the protein growing kids need and none
          of the sugar they don’t.
        </details>
        <details>
          <summary>What milk should I eat this cereal with?</summary>Go with your favorite or with whatever’s in the
          fridge—Magic Spoon is delicious with any kind of milk, from whole milk, to oat milk, to almond (our
          favorite!). If you want to get really creative, try it as a topping for yogurt or even a frozen dessert!
        </details>
        <details>
          <summary>What does this cereal taste like?</summary>It tastes just like you remember—only better! If you’re
          curious about a specific flavor, check out the flavor page and the reviews! If you still need help, feel free
          to email us.
        </details>
        <details>
          <summary>Why is this more expensive than "regular" cereal?</summary>Even though Magic Spoon looks and tastes
          like most cereals you’ll find at the grocery store, it's closer to a high-end protein bar or keto smoothie.
          And at $1.95 per bowl, it’s more cost-effective than many other typical breakfast options (not to mention your
          morning coffee)! Making cereal with high protein and low sugar means working with more expensive ingredients
          than just sugar, corn, and wheat, but it’s all part of our commitment to bring you the best!
        </details>

        <Link to="/FAQ">VIEW MORE FAQ'S &gt;</Link>
      </section>
    </main>
  );

  return content;
}
