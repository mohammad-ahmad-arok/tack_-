import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Gallery.css";
import { galleryData } from "../../constants";

const getItemsCount = () => {
  const width = window.innerWidth;
  if (width >= 1024) return 5;
  if (width >= 768) return 3;
  return 1;
};

const Gallery = () => {
  const [itemsCount, setItemsCount] = useState(getItemsCount());

  useEffect(() => {
    const handleResize = () => {
      setItemsCount(getItemsCount());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="Gallery py-5">
      <div className="container">
        <SectionHeader
          textAlign="center"
          isSpaser={true}
          title="Gallery"
          subTitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />

        <Carousel interval={2000} controls={false} indicators={true}>
          {Array.from({
            length: Math.ceil(galleryData.length / itemsCount),
          }).map((_, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center">
                {galleryData
                  .slice(index * itemsCount, (index + 1) * itemsCount)
                  .map((img, i) => (
                    <img
                      key={i}
                      className="d-block m-2"
                      style={{ width: `${100 / itemsCount}%` }}
                      src={img}
                      alt={`Slide ${i}`}
                    />
                  ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
