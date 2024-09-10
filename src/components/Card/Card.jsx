import "./Card.css";
import Card from "react-bootstrap/Card";

const CardMain = ({
  img,
  icon,
  title,
  paraText,
  height,
  direction,
  iconShadow,
  textStyle,
}) => {
  return (
    <Card
      className={`rounded-0 border-0 ${
        iconShadow ? "" : "shadow"
      }  m-sm-0 m-3 flex-${direction} ${img ? "rounded-2" : " py-3 px-3"}`}
      style={{ height: `${height}rem` }}
    >
      {icon ? (
        <div className="icon-card-box">{icon}</div>
      ) : (
        <Card.Img variant="top" className="rounded-2 " src={img} alt={title} />
      )}
      <Card.Body className={`${direction ? "p-2" : ""}`}>
        <Card.Title className={`fs-4 fw-semibold ${textStyle}`}>
          {title}
        </Card.Title>
        <Card.Text className="card-Para">{paraText}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardMain;
