import "./Form.css";
import Form from "react-bootstrap/Form";

const FormMain = ({ children, className }) => {
  return <Form className={className}>{children}</Form>;
};

FormMain.TextFaild = ({ type, placeholder }) => {
  return (
    <Form.Group className="mb-3 ">
      <Form.Control
        className="rounded-0 py-2 fs-7 black-text"
        type={type}
        placeholder={placeholder}
      />
    </Form.Group>
  );
};

FormMain.TextArea = ({ rows, placeholder }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Control
        className="rounded-0 py-2 fs-7 black-text"
        as="textarea"
        rows={rows}
        placeholder={placeholder}
      />
    </Form.Group>
  );
};

FormMain.Selector = ({ options, placeholder }) => {
  return (
    <Form.Select
      aria-label="Default select example"
      className="rounded-0 py-2 fs-7 black-text"
    >
      <option>{placeholder}</option>
      {options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        );
      })}
    </Form.Select>
  );
};

export default FormMain;
