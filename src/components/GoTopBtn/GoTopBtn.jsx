import { FaArrowUp } from "react-icons/fa";
import "./GoTopBtn.css";
import ButtonMain from "../Boutton/Button";
import { useEffect, useState } from "react";

const GoTopBtn = () => {
  const [goTop, setGoTop] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        setGoTop(true);
      } else {
        setGoTop(false);
      }
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <ButtonMain
      className={`goTopButton py-3 ${goTop ? "active" : ""}`}
      text={<FaArrowUp />}
      onClick={() => {
        scrollUp();
      }}
    />
  );
};

export default GoTopBtn;
