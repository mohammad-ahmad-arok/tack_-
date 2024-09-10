import SectionHeader from "../SectionHeader/SectionHeader";
import "./Contact.css";
import { Col, Row } from "react-bootstrap";
import FormMain from "../Form/Form";
import ButtonMain from "../Boutton/Button";
import { BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="Contact py-5">
      <div className="container">
        <SectionHeader
          textAlign="center"
          isSpaser={true}
          title="Contact"
          subTitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />
      </div>
      <iframe
        className="border-0 w-100 mt-4"
        style={{ height: "370px" }}
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
        frameBorder="0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container mt-5">
        <Row>
          <Col lg={6} xs={12}>
            <Row>
              <Col>
                <div className="col d-flex my-2 flex-column align-items-center shadow w-100  col-sm-4 col-12">
                  <div className="icon-container my-3 p-3 d-flex rounded-circle primary-color ">
                    <BsGeoAlt size={24} className="fs-1" />
                  </div>
                  <SectionHeader
                    textAlign="center"
                    isSpaser={false}
                    title="Address"
                    titleSize={20}
                    subTitle="A108 Adam Street, New York, NY 535022"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={6} xs={12}>
                <div className="col d-flex my-2 flex-column align-items-center shadow w-100  col-sm-4 col-12">
                  <div className="icon-container my-3 p-3 d-flex rounded-circle primary-color ">
                    <BsTelephone size={24} className="fs-1" />
                  </div>
                  <SectionHeader
                    textAlign="center"
                    isSpaser={false}
                    title="Call Us"
                    titleSize={20}
                    subTitle="+1 5589 55488 55"
                  />
                </div>
              </Col>
              <Col>
                <div className="col d-flex my-2 flex-column align-items-center shadow w-100  col-sm-4 col-12">
                  <div className="icon-container my-3 p-3 d-flex rounded-circle primary-color ">
                    <BsEnvelope size={24} className="fs-1" />
                  </div>
                  <SectionHeader
                    textAlign="center"
                    isSpaser={false}
                    title="Email Us"
                    titleSize={20}
                    subTitle="info@example.com"
                  />
                </div>
              </Col>
            </Row>
          </Col>

          <Col lg={6} xs={12}>
            <FormMain className='mt-sm-2 mt-5 shadow p-4'>
              <div className="row">
                <div className="col mt-3 mt-md-2">
                  <FormMain.TextFaild type="text" placeholder="Your Name" />
                </div>

                <div className="col mt-3 mt-md-2">
                  <FormMain.TextFaild type="email" placeholder="Your Email" />
                </div>
              </div>
              <div className="row">
                <div className="col mt-3 mt-md-2">
                  <FormMain.TextFaild type="text" placeholder="Subject" />
                </div>
              </div>

              <div className="row">
                <div className="col mt-3 mt-md-2">
                  <FormMain.TextArea
                    rows={5}
                    placeholder="Message"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col text-center mt-3">
                  <ButtonMain text="Send Message" />
                </div>
              </div>
            </FormMain>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Contact;
