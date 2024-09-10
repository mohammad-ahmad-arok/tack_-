import { doctorsData } from "../../constants";
import CardMain from "../Card/Card";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Doctors.css";

const Doctors = () => {
  return (
    <section className="Appointment py-5">
      <div className="container">
        <SectionHeader
          textAlign="center"
          isSpaser={true}
          title="Doctors"
          subTitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />
        <div className="row mt-4">
          {doctorsData.map((el, index) => {
            return (
              <div className="col" key={index}>
                <CardMain img={el.img} title={el.name} paraText={el.position} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
