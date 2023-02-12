import { useState } from "react";
import { useGetAllTestimonialsQuery } from "../../services/testimonialsApi";
import "./TestimonialSlider.css";

export default function TestimonialSlider() {
  const { data: testimonials, isSuccess } = useGetAllTestimonialsQuery();

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    index === 0 ? setIndex(testimonials?.length - 1) : setIndex((prev) => prev - 1);
  };

  const nextSlide = () => {
    index === testimonials?.length - 1 ? setIndex(0) : setIndex((prev) => prev + 1);
  };

  const content = (
    <div className="testimonialSliderContainer">
      <div className="testimonialButtons LT" onClick={() => prevSlide()}>
        &lt;
      </div>
      {isSuccess && (
        <div className="testimonialSlider">
          <p>"{testimonials[index]?.statement}"</p>
          <h3>{testimonials[index]?.company.toUpperCase()}</h3>
        </div>
      )}

      <div className="testimonialButtons GT" onClick={() => nextSlide()}>
        &gt;
      </div>

      {isSuccess && (
        <div className="testimonialDots">
          {testimonials?.map((i, idx) => {
            return (
              <div
                key={idx}
                className={`dotElement ${index === idx ? "selected" : ""}`}
                onClick={() => setIndex(idx)}
              ></div>
            );
          })}
        </div>
      )}
    </div>
  );

  return content;
}
