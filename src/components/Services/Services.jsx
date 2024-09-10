import { ServicesCards } from "../../constants";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Services.css";

const Services = () => {
  return (
    <section className="Services py-5">
      <SectionHeader
        textAlign="center"
        isSpaser={true}
        title="Services"
        subTitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <div className="container ">
        <div className="row">
          {ServicesCards.map((el, index) => {
            return (
              <div
                className="col d-flex my-2 flex-column align-items-center  col-sm-4 col-12"
                key={index}
              >
                <div className="icon-container my-3 p-4 d-flex  rounded-circle primary-color shadow">
                  <el.icon size={40} className="fs-1" />
                </div>
                <SectionHeader
                  textAlign="center"
                  isSpaser={true}
                  title={el.title}
                  titleSize={24}
                  subTitle={el.paraText}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
