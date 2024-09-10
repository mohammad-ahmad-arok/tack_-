import { Accordion } from "react-bootstrap";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./FAQs.css";
import { faqsData } from "../../constants";

const FAQs = () => {
  return (
    <section className="FAQs Appointment py-5 ">
      <div className="container p-sm-5 p-0">
        <SectionHeader
          textAlign="center"
          isSpaser={true}
          title="Frequently Asked Questions"
          subTitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />
        <Accordion className="px-sm-5 px-0">
          {faqsData.map((el, index) => {
            return (
              <Accordion.Item
                key={index}
                eventKey={index}
                className="border-0  shadow-sm py-1 mt-3 mx-4"
              >
                <Accordion.Header className="fw-semibold">
                  {el.header}
                </Accordion.Header>
                <Accordion.Body>{el.body}</Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQs;
