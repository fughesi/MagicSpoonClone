import "./Carousel.css";
import { useGetAllCerealsQuery } from "../../services/cerealsApi";

export default function Carousel() {
  const { data: cereal } = useGetAllCerealsQuery();

  const content = (
    <div className="carouselContainer">
      {cereal &&
        cereal.map((i) => {
          return (
            <div key={i._id} className="carouselElement">
              <div className="carouselDiv">
                <img src={i.image.data} alt="photo of cereal" />
                {/* <img src={`data:image/png;base64,${i.image.data.toString("base64")}`} alt="photo of cereal" /> */}
              </div>
              <p>{i.title}</p>
            </div>
          );
        })}
    </div>
  );

  return content;
}
