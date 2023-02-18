import "./Carousel.css";
import { useGetAllCerealsQuery } from "../../services/cerealsApi";
import { cerealCarouselJSON } from "../../assets/img/cerealCarousel/__exports";

export default function Carousel() {
  const { data: cereal } = useGetAllCerealsQuery();

  const content = (
    <div className="carouselContainer">
      {cerealCarouselJSON.map((i, index) => {
        return (
          <div key={index} className="carouselElement">
            <div className="carouselDiv">
              <img src={i.image} alt="photo of cereal" />
            </div>
            <p>{i.title}</p>
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
