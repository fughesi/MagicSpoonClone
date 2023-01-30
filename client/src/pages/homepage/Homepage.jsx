import "./Homepage.css";
import { useSelector } from "react-redux";

export const Homepage = () => {
  const blur = useSelector((state) => state.theme.blur);

  const content = (
    <main className={`homePageContainer ${blur ? "blur" : ""}`}>
      <section className="homepage__section_1" aria-label="home page hero section">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, amet temporibus possimus asperiores placeat
        eos facere fuga! Fugit porro laboriosam numquam? Alias maiores voluptate animi enim hic a sed facilis. Nemo
        laudantium nulla rerum dicta vel in ipsam! Ab, reprehenderit! Libero delectus voluptas ratione autem,
        repudiandae eligendi ab sit voluptate earum nihil illo dolor quasi
      </section>
      <section className="homepage__section_2" aria-label="home page hero section"></section>
      <section className="homepage__section_3" aria-label="home page hero section"></section>
      <section className="homepage__section_4" aria-label="home page hero section"></section>
      <section className="homepage__section_5" aria-label="home page hero section"></section>
      <section className="homepage__section_6" aria-label="home page hero section"></section>
      <section className="homepage__section_7" aria-label="home page hero section"></section>
      <section className="homepage__section_8" aria-label="home page hero section"></section>
      <section className="homepage__section_9" aria-label="home page hero section"></section>
    </main>
  );

  return content;
};
