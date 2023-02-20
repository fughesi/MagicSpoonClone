import CTAsection from "../../components/cta-section/CTAsection";
import "./OurStory.css";

export default function OurStory() {
  const content = (
    <main className="OurStoryContainer">
      <section className="ourStorySection1">
        <div className="storyText">
          <div>
            <div className="fadeIntroPhoto"></div>
            <div className="fadeIntroPhoto"></div>
          </div>
          <div>
            <p>
              Hi, we’re Greg and Gabi, co-founders of Magic Spoon.
              <br />
              <br />
              We’ve been friends for ten years: met at college, lived together, even started a previous business
              together (you could call us “cereal” entrepreneurs…). We both grew up eating cereal every morning for
              breakfast, binging on the sugary crunch of the classic brands and then crashing in the afternoon when we
              were supposed to be at our most productive.
              <br />
              <br />
              Now that we’re adults, we’ve searched for years for a cereal that has the same addictive quality but
              actually fuels us. We've turned up nothing.
              <br />
              <br />
              Plus, as we learned more about the cereal industry, we were shocked by the true scope of the problem. The
              average American eats 100 bowls of cereal a year (this even includes people who don’t eat a single bowl!),
              and kids are one of the largest consumers. Yet almost every version in the aisle is stuck in that old
              paradigm of grains and sugar.
              <br />
              <br />
              We experimented for over a year to create a cereal inspired by the flavors and nostalgia of
              Saturday-morning-cartoon cereal but upgraded for a 21st-century consumer. A guilt-free treat that tastes
              like you remember and you can eat at any time of day.
              <br />
              <br />
              That’s what Magic Spoon is all about—we hope you enjoy!
            </p>
          </div>
        </div>
      </section>

      <section className="ourStorySection2">
        <CTAsection />
      </section>
    </main>
  );

  return content;
}
