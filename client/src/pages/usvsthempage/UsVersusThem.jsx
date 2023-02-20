import React from "react";
import CTAsection from "../../components/cta-section/CTAsection";
import FooterMobile from "../../components/footer/FooterMobile";

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
      <section className="UsVersusThemSection2"></section>
      <section className="UsVersusThemSection3"></section>
      <section className="UsVersusThemSection4">
        <CTAsection />
      </section>
    </main>
  );

  return content;
}
