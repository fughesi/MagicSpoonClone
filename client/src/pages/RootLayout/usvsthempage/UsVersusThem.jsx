import "./UsVersusThem.css";
import CTAsection from "../../../components/cta-section/CTAsection";
import { img3 } from "../../../assets/img/floatingCereal/__exports";

export default function UsVersusThem() {
  const content = (
    <main className="UsVersusThemContainer">
      <section className="UsVersusThemSection1" aria-label="">
        <p>
          Remember the carefree days of childhood, when you didn't have to worry about empty carbs and sugar crashes?
          Well, now you can have your cereal and eat it too. We re-engineered that same great taste with grown-up
          ingredients for a game-changing cereal 2.0. See how we stack up against the others:
        </p>
      </section>
      <section className="UsVersusThemSection2">
        <div>
          <img src={img3} alt="cereal loop" />
          <h6>Our sweet little secret:</h6>
          <p>
            We use a natural blend of monk fruit and allulose. Allulose has almost zero glycemic impact and almost zero
            calories (less than 0.4 cal/g).
          </p>
        </div>
      </section>
      <section className="UsVersusThemSection3"></section>
      <section className="UsVersusThemSection4">{<CTAsection />}</section>
    </main>
  );

  return content;
}
