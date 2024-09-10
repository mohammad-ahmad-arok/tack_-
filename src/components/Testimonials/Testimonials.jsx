import { useState, useEffect } from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import SectionHeader from "../SectionHeader/SectionHeader";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import "./Testimonials.css";
import { testimonialsData } from "../../constants";
import TestimonialsCard from "../TestimonialsCard/TestimonialsCard";

const Testimonials = () => {
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1);
      } else if (window.innerWidth < 992) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const chunks = chunkArray(testimonialsData, visibleItems);

  return (
    <section className="Testimonials py-5">
      <div className="container">
        <SectionHeader
          textAlign="center"
          isSpaser={true}
          title="Testimonials"
          subTitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />

        <Carousel indicators={true} interval={3000} pause="hover" wrap={true}>
          {chunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <Row>
                {chunk.map((el, idx) => (
                  <Col
                    key={idx}
                    xs={12}
                    md={6}
                    lg={4}
                    className="position-relative"
                  >
                     <TestimonialsCard
                      commient={el.commient}
                      img={el.img}
                      name={el.name}
                      position={el.position}
                      key={index}
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
