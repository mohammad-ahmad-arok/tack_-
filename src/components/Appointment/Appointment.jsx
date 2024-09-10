import ButtonMain from "../Boutton/Button";
import FormMain from "../Form/Form";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./Appointment.css";

const Appointment = () => {
  return (
    <section className="Appointment py-5">
      <div className="container">
        <SectionHeader
          textAlign="center"
          isSpaser={true}
          title="MAKE AN APPOINTMENT"
          subTitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />

        <FormMain>
          <div className="row">
            <div className="col col-md-4 ">
              <FormMain.TextFaild type="text" placeholder="Your Name" />
            </div>

            <div className="col col-md-4 col-12 mt-3 mt-md-0">
              <FormMain.TextFaild type="email" placeholder="Your Email" />
            </div>

            <div className="col col-md-4 mt-3 mt-md-0">
              <FormMain.TextFaild type="text" placeholder="Your phone" />
            </div>
          </div>

          <div className="row">
            <div className="col col-md-4 mt-3 mt-md-0">
              <FormMain.TextFaild type="datetime-local" />
            </div>

            <div className="col col-md-4 mt-3 mt-md-0 col-12">
              <FormMain.Selector
                placeholder="Select Department"
                options={[
                  { value: "1", text: "Department_1" },
                  { value: "2", text: "Department_2" },
                ]}
              />
            </div>

            <div className="col col-md-4 mt-3 mt-md-0">
              <FormMain.Selector
                placeholder="Select Doctor"
                options={[
                  { value: "1", text: "Doctor_1" },
                  { value: "2", text: "Doctor_2" },
                ]}
              />
            </div>
          </div>
          <div className="row">
            <div className="col mt-3 mt-md-0">
              <FormMain.TextArea rows={5} placeholder="Message (optional)" />
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <ButtonMain text="Make an Appointment" />
            </div>
          </div>
        </FormMain>
      </div>
    </section>
  );
};

export default Appointment;
