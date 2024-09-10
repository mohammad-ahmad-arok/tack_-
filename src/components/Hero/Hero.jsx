import { HeroSlide } from "../../constants";
import ButtonMain from "../Boutton/Button";
import Slider from "../Slider/Slider";
import "./Hero.css";
import Carousel from "react-bootstrap/Carousel";

const Hero = () => {
  return (
    <section className="hero">
      <Slider>
        {HeroSlide.map((slide, index) => {
          return (
            <Carousel.Item key={index}>
              <img
                src={slide.img}
                className="object-fit-cover"
                alt={slide.hradText}
              />
                <Carousel.Caption className="bg-linerWhite black-text px-2 py-4 border-top border-5 mb-5">
                  <h3 className="fs-2 fw-bold">{slide.hradText}</h3>
                  <p>{slide.paraText}</p>
                  <ButtonMain text={slide.btnText} />
                </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Slider>
    </section>
  );
};

export default Hero;
