import "./Slider.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = ({children}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
        {children}
    </Carousel>
  );
};

export default Slider;
