import ButtonMain from "../Boutton/Button";
import "./PricingCard.css";
import Card from "react-bootstrap/Card";

const PricingCard = ({ className, header, price, items }) => {
  return (
    <Card className="text-center border-0 shadow-sm overflow-hidden m-sm-0 m-2">
      <Card.Header className={`py-3 border-0 ${className}`}>
        {header}
      </Card.Header>
      <Card.Body>
        <Card.Title className="fs-6 black-text fw-light">
          <span className="fs-1">${price}</span>/month
        </Card.Title>
        <Card.Text>
          {items.map((el, index) => {
            return (
              <h5 key={index} className={`fs-6 fw-normal mt-3 ${el.className}`}>
                {el.content}
              </h5>
            );
          })}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted py-4 border-0">
        <ButtonMain text="Buy Now" />
      </Card.Footer>
    </Card>
  );
};

export default PricingCard;
