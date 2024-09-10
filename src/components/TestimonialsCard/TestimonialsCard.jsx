import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./TestimonialsCard.css";
import { CarouselCaption } from "react-bootstrap";

const TestimonialsCard = ({ commient, img, name, position }) => {
  return (
    <div className="TestimonialsCard">
      <div className="text-box p-4 pb-5 rounded">
        <FaQuoteLeft size={16} className="primary-color" />
        {"  "}
        {commient}
        <FaQuoteRight size={16} className="primary-color" />
      </div>
      <CarouselCaption className="position-relative text-start black-text">
        <img
          className="d-block w-25 rounded-circle border border-5"
          src={img}
          alt={name}
        />
        <h5 className="mt-2">{name}</h5>
        <p className="fs-7 ">{position}</p>
      </CarouselCaption>
    </div>
  );
};

export default TestimonialsCard;
