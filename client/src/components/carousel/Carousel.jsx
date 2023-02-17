import "./Carousel.css";
import { useGetAllCerealsQuery } from "../../services/cerealsApi";
import { one, two, three, four, five, six, seven, eight, nine } from "../../assets/img/cerealCarousel/__exports";

export default function Carousel() {
  const { data: cereal } = useGetAllCerealsQuery();

  const cerealArr = [one, two, three, four, five, six, seven, eight, nine];

  {
    /* <img src={`data:image/png;base64,${i.image.data.toString("base64")}`} alt="photo of cereal" /> */
  }
  const content = (
    <div className="carouselContainer">
      {cerealArr.map((i, index) => {
        return (
          <div key={index} className="carouselElement">
            <div
              className="carouselDiv"
              style={{ backgroundImage: `url(${i})`, objectFit: "cover", width: "100%", backgroundPosition: "center" }}
            >
              {/* <img src={i} alt="photo of cereal" style={{ objectFit: "cover", width: "100%" }} /> */}
            </div>
          </div>
        );
      })}
      {/* <div className="carouselContainer">
      {cereal &&
        cereal.map((i) => {
          return (
            <div key={i._id} className="carouselElement">
              <div className="carouselDiv">
                <img src={i.image.data} alt="photo of cereal" />
              </div>
              <p>{i.title}</p>
            </div>
          );
        })} */}
    </div>
  );

  return content;
}
