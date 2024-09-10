import "./CardContainer.css";

const CardContainer = ({children}) => {
  return (
    <section className="CardContainer">
      <div className="container py-5  ">
        <div className="row justify-content-between ">{children}</div>
      </div>
    </section>
  );
};

export default CardContainer;
