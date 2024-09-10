import ButtonMain from "../Boutton/Button";
import "./HelpNow.css";

const HelpNow = () => {
  return (
    <section className="HelpNow">
      <div className="contianer-fluid bg-primary text-center white-text ">
        <div className="row m-0 p-sm-5 p-0 py-5  justify-content-center">
          <div className="text-contenet w-sm-75 w-100">
            <h2>In an emergency? Need help now?</h2>
            <p className="mb-4 mt-2">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <ButtonMain text="Make an Appointment" type="stroke" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpNow;
