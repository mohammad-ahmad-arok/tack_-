import "./Button.css";
import Button from "react-bootstrap/Button";

const ButtonMain = ({ type, text, onClick, className }) => {
  return (
    <Button
      onClick={onClick}
      variant={type ? `outline-light` : `primary`}
      className={`${
        type ? `outline-light` : `primary border-0 bg-primary`
      } fs-6 px-4 py-2 ${className}`}
    >
      {text}
    </Button>
  );
};

export default ButtonMain;
