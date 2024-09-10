import SectionHeader from "../SectionHeader/SectionHeader";
import { Nav, Col, Row, Tab } from "react-bootstrap";
import "./Departments.css";
import { departmentsData } from "../../constants";

const Departments = () => {
  return (
    <section className="Departments py-5">
      <div className="container">
        <SectionHeader
          textAlign="center"
          isSpaser={true}
          title="Departments"
          subTitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
        />

        <div className="tap-container mt-5">
          <Tab.Container id="left-tabs-example" defaultActiveKey="cardiology">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  {departmentsData.links.map((el, index) => {
                    return (
                      <Nav.Item key={index}>
                        <Nav.Link
                          className="rounded-0 text-black"
                          eventKey={el.eventKey}
                        >
                          {el.text}
                        </Nav.Link>
                      </Nav.Item>
                    );
                  })}
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  {departmentsData.content.map((el, index) => {
                    return (
                      <Tab.Pane key={index} eventKey={el.eventKey}>
                        <div className="contenet d-flex flex-column-reverse flex-sm-row">
                          <div className="text-box ">
                            <SectionHeader
                              textAlign="start"
                              isSpaser={false}
                              title={el.title}
                              subTitle={el.para}
                            />
                          </div>
                          <div className="image-box my-4">
                            <img
                              className="w-100"
                              src={el.image}
                              alt={el.title}
                            />
                          </div>
                        </div>
                      </Tab.Pane>
                    );
                  })}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </section>
  );
};

export default Departments;
