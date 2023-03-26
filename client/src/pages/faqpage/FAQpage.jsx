import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./FAQpage.css";

export default function FAQ() {
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 100);
  }, []);

  const content = (
    <main className="FAQpageContainer">
      <h1 className="FAQtagline">WE GOT ANSWERS</h1>

      <a href="#product">
        <div className="inPageLink">PRODUCT</div>
      </a>
      <a href="#shipping">
        <div className="inPageLink">SHIPPING</div>
      </a>
      <a href="#international">
        <div className="inPageLink">INTERNATIONAL</div>
      </a>
      <a href="#orders">
        <div className="inPageLink">ORDERS</div>
      </a>
      <a href="#general">
        <div className="inPageLink">GENERAL</div>
      </a>

      <h2 id="product">PRODUCT:</h2>
      <details>
        <summary>What kind of sorcery is this? Where did all the carbs and sugar go?</summary>

        <p>
          We spent over a year working through hundreds of formulations in a quest to recreate our favorite childhood
          cereals that wouldn't give us a sugar crash. We eventually figured out a way to include all of the good stuff
          you want—like protein and healthy fats—without any of the high sugar you don’t. Magic Spoon contains 0g sugar
          across most flavors, and 1g of sugar in Honey Nut.
        </p>
      </details>
      <details>
        <summary>Is this cereal keto-friendly?</summary>
        <p>
          Yes. Magic Spoon is perfect for anyone on a ketogenic or low carb diet. Each serving has 4g net carbs, and
          0.5-1.5g saturated fats from a blend of high-oleic sunflower oil and avocado oil. <br />
          <br />
          In fact, one of the reasons we created this in the first place is that we couldn’t find a cereal to fit into
          our low carb lifestyles, and we missed our childhood cereals more than anything else (yes, even pizza).
        </p>
      </details>
      <details>
        <summary>What are net carbs?</summary>
        <p>
          Not all carbs are created equal. Fiber and (most) natural sweeteners don’t affect your blood sugar, so they’re
          stripped out to get “net carbs,” which you can think of as the active carbs that affect your body.
          <br />
          <br />
          In our case, net carbs = total carbs - allulose - fiber.
        </p>
      </details>
      <details>
        <summary>Do kids eat/like Magic Spoon?</summary>
        <p>
          Yep! Kids love Magic Spoon because it tastes just like their sugary favorites, and you’ll love it because you
          know they’re getting the protein growing kids need and none of the sugar they don’t.
        </p>
      </details>
      <details>
        <summary>What milk should I eat this cereal with?</summary>
        <p>
          Go with your favorite or with whatever’s in the fridge—Magic Spoon is delicious with any kind of milk, from
          whole milk, to oat milk, to almond (our favorite!). If you want to get really creative, try it as a topping
          for yogurt or even a frozen dessert!
        </p>
      </details>
      <details>
        <summary>What does this cereal taste like?</summary>
        <p>
          It tastes just like you remember—only better! If you’re curious about a specific flavor, check out the flavor
          page and the reviews! If you still need help, feel free to email us.
        </p>
      </details>
      <details>
        <summary>Why is this more expensive than "regular" cereal?</summary>
        <p>
          Even though Magic Spoon looks and tastes like most cereals you’ll find at the grocery store, it's closer to a
          high-end protein bar or keto smoothie. And at $1.95 per bowl, it’s more cost-effective than many other typical
          breakfast options (not to mention your morning coffee)! Making cereal with high protein and low sugar means
          working with more expensive ingredients than just sugar, corn, and wheat, but it’s all part of our commitment
          to bring you the best!
        </p>
      </details>
      <details>
        <summary>What is the nutritional content of your cereal?</summary>
        <p>Full nutritional info for any of our products can be found on its product page.</p>
      </details>
      <details>
        <summary>What are the ingredients in Magic Spoon cereal?</summary>
        <p>
          All of our cereal flavors contain the following ingredients: milk protein blend (casein and whey protein
          concentrate), monk fruit, allulose, a blend of high oleic sunflower oil and avocado oil, tapioca starch,
          chicory root fiber, salt, and natural flavors. For a full breakdown of additional ingredients specific to each
          flavor, check out that flavor’s product page.
        </p>
      </details>
      <details>
        <summary>How long will your cereal stay fresh?</summary>
        <p>Unopened boxes of Magic Spoon, both cereal and cereal bars, have a shelf-life of 12 months.</p>
      </details>
      <details>
        <summary>What is Allulose?</summary>
        <p>
          Allulose is a naturally-occuring rare sugar found in certain plants and fruits. It tastes just like the sugar
          you’re used to, but has almost no glycemic impact and almost zero calories (less than 0.4 cal/g).
        </p>
      </details>
      <details>
        <summary>Is this cereal kosher?</summary>
        <p>Yes, Magic Spoon cereal and cereal bars are certified kosher dairy by Orthodox Union Kosher.</p>
      </details>
      <details>
        <summary>What flavors contain nuts?</summary>
        <p>
          All of our cereal, with the exception of Peanut Butter, is manufactured in a facility that handles other
          varieties of nuts. We do not use any nuts in the formulation of our cereals [except for Peanut Butter] but the
          facility we manufacture in is not nut-free. If you specifically have a Peanut allergy, we can guarantee that
          no other flavors are exposed to Peanuts, as we manufacture our Peanut Butter flavor in a completely separate
          facility.
          <br />
          <br />
          All of our cereal bars are manufactured in the same facility, on separate production lines. All bars contain
          almonds, and the Cocoa Peanut Butter flavor contains Peanuts. If you have a Peanut allergy, please note that
          all bar flavors are produced in a shared facility and we cannot guarantee bars be completely peanut free.
        </p>
      </details>
      <details>
        <summary>Is Magic Spoon Cereal high protein?</summary>
        <p>
          Yes! Just one serving of Magic Spoon cereal has 13-14g grams of high quality protein.
          <br />
          <br />
          In addition, Magic Spoon is also keto-friendly, gluten-free, and grain-free!
        </p>
      </details>
      <details>
        <summary>Is Magic Spoon cereal gluten-free, vegan, and/or dairy-free?</summary>
        <p>
          Our cereal and cereal bars are Certified Gluten-Free, but it is made in a shared facility that also processes
          products that contain gluten. We test product in and product out, and can guarantee that we comply with the
          Gluten-Free Certification Organization's requirement to contain no more than 10 parts per million gluten.
          <br />
          <br />
          Because Magic Spoon is made with a milk protein blend, our cereal is not vegan or dairy-free. We don't have
          plans for a vegan or dairy-free cereal in the immediate future, but we're definitely keeping it in mind as we
          continue to expand our product line.
        </p>
      </details>
      <details>
        <summary>What are your boxes made out of? Can they be recycled?</summary>
        <p>Our boxes are made from 100% recycled cardboard—recycle them again and keep the cycle going!</p>
      </details>
      <h2 id="shipping">SHIPPING:</h2>
      <details>
        <summary>Who are your shipping partners within the US?</summary>
        <p>We ship with DHL and UPS, who often team up with USPS to complete delivery.</p>
      </details>
      <details>
        <summary>Do you offer expedited shipping?</summary>
        <p>
          We don’t offer expedited shipping at this time, but if you’re craving Magic Spoon right now we promise it’s
          worth a few day’s wait.
        </p>
      </details>
      <details>
        <summary>My order arrived, but it’s damaged!</summary>
        <p>
          We’re so sorry to hear that! Please email us at&nbsp;
          <a href="mailto:hello@magicspoon.com" target="_blank" rel="noreferrer noopener nofollow">
            hello@magicspoon.com
          </a>
          &nbsp; and let us know which flavors were damaged so we can get this sorted out right away.
        </p>
      </details>
      <details>
        <summary>Help! My package says it was delivered, but it’s not here! </summary>
        <p>
          Don’t panic! Sometimes orders can be prematurely marked as delivered or might have been dropped off at a front
          desk or mailroom. If you still haven’t received your order by the end of the next business day, let us know at
          &nbsp;
          <a href="mailto:hello@magicspoon.com" target="_blank" rel="noreferrer noopener nofollow">
            hello@magicspoon.com
          </a>
          .
        </p>
      </details>
      <details>
        <summary>How long will it take for my order to arrive and how do I track it?</summary>
        <p>
          We process most orders within 1 business day, and delivery typically takes 3-5 days within the US. Once your
          order ships, we’ll send you an email with a shipping confirmation and all the tracking info.
        </p>
      </details>

      <h2 id="international">INTERNATIONAL:</h2>

      <details>
        <summary>Where can Magic Spoon be shipped to?</summary>
        <p>
          Right now, we deliver to the United States (including Alaska, Hawaii, and Puerto Rico), Canada, and the United
          Kingdom.
        </p>
      </details>
      <details>
        <summary>How much does shipping cost?</summary>
        <p>
          Domestic orders within the continental US + Puerto Rico ship for $4.99. Shipping rates to HI + AK are $24.99.
          International orders are charged a flat-rate of $7.99 USD for one case (4 boxes), and $11.99 USD total for
          more than one case. Keep in mind that if you order non-food items, like our bowls and spoons, taxes may apply.
        </p>
      </details>
      <details>
        <summary>How long does it take to ship to the UK?</summary>
        <p>
          Shipments to the UK typically take 10-14 business days, depending on transit conditions and customs clearance.
          As always, please allow extra transit time for international orders.
        </p>
      </details>
      <details>
        <summary>How long does it take for Magic Spoon to be delivered to Canada? </summary>
        <p>
          Shipments to Canada typically take 5-10 business days, depending on transit conditions and customs clearance.
          As always, please allow extra transit time for international orders.
        </p>
      </details>

      <h2 id="orders">ORDERS:</h2>

      <details>
        <summary>100% Happiness Guarantee - Refund Policy</summary>
        <p>
          MagicSpoon.com customers: If you don’t 100% love your cereal, we’ll give you a refund on your first case (up
          to 4 boxes). Refunds are eligible within 6 months of the order date. In-store customers: If you don’t 100%
          love your cereal, please visit the customer service desk at the store you purchased from to request your
          refund. Refunds are subject to the store's return policy. A customer unable to obtain a refund at the store of
          purchase can contact &nbsp;
          <a href="mailto:hello@magicspoon.com" target="_blank" rel="noreferrer noopener nofollow">
            hello@magicspoon.com
          </a>
          &nbsp; for a voucher for a complimentary box of cereal, with proof of purchase.
        </p>
      </details>
      <details>
        <summary>How do I manage or cancel my cereal subscription?</summary>
        <p>
          You can skip, edit and manage all of your subscription details through the{" "}
          <Link to="/">subscription portal.</Link> You can cancel your subscription through the portal, or you can also
          email &nbsp;
          <a href="mailto:cancellation@magicspoon.com" target="_blank" rel="noreferrer noopener nofollow">
            cancellation@magicspoon.com
          </a>
          .
        </p>
      </details>
      <details>
        <summary>Can I update my shipping address, edit, or cancel my order once I place it?</summary>
        <p>
          Orders typically ship out the same day at Magic Spoon, but we’ll do everything we can to catch your order.
          Please email us at &nbsp;
          <a href="mailto:hello@magicspoon.com" target="_blank" rel="noreferrer noopener nofollow">
            hello@magicspoon.com
          </a>
          &nbsp;with your order number and we’ll do our best to work some magic for you.
        </p>
      </details>
      <details>
        <summary>What’s the difference between the Variety Case and the Build Your Own Box? </summary>
        <p>
          The Variety Case is a set assortment of our most popular flavors in one case, including Fruity, Frosted,
          Cocoa, and Peanut Butter. Our Build Your Own Box option lets you pick your own flavors, so you can mix and
          match!
        </p>
      </details>
      <details>
        <summary>How many boxes of cereal are in each case? </summary>
        <p>
          You can order your cereal in packs of 4 boxes for single flavors, or in packs of 4 or 6 boxes through our
          Build Your Own Box page. Right now, we’re not able to support single-box orders.
        </p>
      </details>
      <details>
        <summary>How do I apply a discount code to my order?</summary>
        <p>
          You can add your promo code to your order on the checkout page, right where you enter your payment
          information. If you're on a computer, you’ll see a panel on the right side of the screen with a field that
          says "Enter Gift Card or Discount Code." If you're on your phone, click "see order details” at the top of your
          screen and enter your code in the discount code field.
        </p>
      </details>
      <details>
        <summary>Do you have any samples?</summary>
        <p>
          As a growing company, we can’t send out any samples at the moment. However, we do offer a 100% happiness
          guarantee in case you don’t love it. So give it a shot, and let us know what you think! And if you want to
          sample a few flavors at once, check out our Variety Packs for a mix of our bestsellers.
        </p>
      </details>
      <details>
        <summary>Do you offer wholesale or retail?</summary>
        <p>
          We are currently in Target and Sprouts stores across the US. To find your nearest Target or Sprouts location
          that carries Magic Spoon, use our Store Finder. For more information about carrying Magic Spoon in your store,
          please contact retail@magicspoon.com.
        </p>
      </details>

      <h2 id="general">GENERAL:</h2>
      <details>
        <summary>More questions?</summary>
        <p>
          Drop a line for any suggestions you might have to &nbsp;
          <a href="mailto:hello@magicspoon.com" target="_blank" rel="noreferrer noopener nofollow">
            hello@magicspoon.com
          </a>
          ! We don’t have a customer support phone line, but we promise that whenever you email us, a real live human
          being will answer you (robots do not eat our cereal or respond to our emails!).
        </p>
      </details>
    </main>
  );

  return content;
}
