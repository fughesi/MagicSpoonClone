import "./Carousel.css";
import { useGetAllCerealsQuery } from "../../services/cerealsApi";
import { cerealCarouselJSON } from "../../assets/img/cerealCarousel/__exports";
import FileBase64 from "react-file-base64";

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
    </div>
  );

  // <>
  {
    /* <form action="http://localhost:5150/cereals/upload" method="POST" encType="multipart/form-data">
        <input type="text" name="title" placeholder="title" />
        <input type="number" name="price" />
        <FileBase64 multiple={false} onDone={({ base64 }) => console.log("yo mama")} />
        <input type="submit" />
      </form> */
  }

  {
    /* <div className="carouselContainer">
        {cereal &&
          cereal.map((i) => {
            const base64String = btoa(String.fromCharCode(...new Uint8Array(i.image)));

            return (
              <div key={i._id} className="carouselElement">
                <div className="carouselDiv">
                   <img src={i.image.data} alt="photo of cereal" /> 
                  <img src={`data:image/png;base64,${base64String}`} width="300" alt="photo of cereal" />
                </div>
                <p>{i.title}</p>
                {console.log(`data:image/png;base64,${base64String}`)}
              </div>
            );
          })}
      </div> */
  }
  // </>
  // );

  return content;
}
