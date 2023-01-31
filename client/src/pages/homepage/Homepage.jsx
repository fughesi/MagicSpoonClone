import "./Homepage.css";
import { setDarkMode } from "../../features/themeSlice";
import { useGetAllTestimonialsQuery } from "../../services/testimonialsApi";
import { useSelector, useDispatch } from "react-redux";
import CallToAction from "../../components/cta/CallToAction";

export const Homepage = () => {
  const blur = useSelector((state) => state.theme.blur);
  const dark = useSelector((state) => state.theme.darkMode);

  const dispatch = useDispatch();

  const { data, isLoading, isError, isSuccess } = useGetAllTestimonialsQuery();

  const content = (
    <main className={`homePageContainer ${blur ? "blur" : ""}`}>
      <section className="homepage__section_1" aria-label="home page hero section">
        <h1>High protein cereal that tastes too good to be true.</h1>
        <CallToAction name={"CTA"} />
      </section>
      <section className="homepage__section_2" aria-label="home page hero section">
        <h4>Find Your Flavor</h4>
      </section>
      <section className="homepage__section_3" aria-label="home page hero section">
        {isSuccess ? JSON.stringify(data) : "stuff"}
      </section>
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
