import { Col, Row } from "react-bootstrap";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Pricing.css";
import PricingCard from "../PricingCard/PricingCard";
import { pricingCardData } from "../../constants";

const Pricing = () => {
  return (
    <section className="Pricing py-5">
      <div className="container">
        <SectionHeader
          textAlign="center"
          isSpaser={true}
          title="Pricing"
          subTitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />

        <Row>
          {pricingCardData.map((el, index) => {
            return (
              <Col xs={12} md={6} lg={3} key={index} >
                <PricingCard 
                  className={el.className}
                  header={el.header}
                  price={el.price}
                  items={el.items}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
};

export default Pricing;
