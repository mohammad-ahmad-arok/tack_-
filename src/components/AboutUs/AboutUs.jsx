import { FaPlay } from "react-icons/fa";
import SectionHeader from "../SectionHeader/SectionHeader";
import "./AboutUs.css";
import { BsCheck2All } from "react-icons/bs";
import CardContainer from "../CardContainer/CardContainer";
import CardMain from "../Card/Card";
import { EnimQuisCards, infoByNumber } from "../../constants";

const AboutUs = () => {
  return (
    <section className="about-us my-5">
      <SectionHeader
        textAlign="center"
        isSpaser={true}
        title="About Us"
        subTitle="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
      />
      <div className="container mt-3">
        <div className="row items-start">
          <div className="col col-12 col-sm-6">
            <div className="content position-relative">
              <img
                src="/assets/images/about.jpg"
                className="w-100"
                alt="about"
              />
              <div className="play-icon-box position-absolute p-4 top-50 white-text bg-primary rounded-circle start-50 translate-middle">
                <FaPlay size={30} />
              </div>
            </div>
          </div>

          <div className="col col-12 col-sm-6">
            <h4 className="fw-semibold mt-sm-0 mt-4">
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h4>
            <p className="mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="p-0">
              <li className=" d-flex gap-2 pt-3">
                <div className="icon-box">
                  <BsCheck2All size={18} className="primary-color" />
                </div>
                <span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
              </li>
              <li className=" d-flex gap-2 pt-3">
                <div className="icon-box">
                  <BsCheck2All size={18} className="primary-color" />
                </div>
                <span>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </span>
              </li>
              <li className=" d-flex gap-2 pt-3">
                <div className="icon-box">
                  <BsCheck2All size={18} className="primary-color" />
                </div>
                <span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate trideta
                  storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </span>
              </li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </p>
          </div>
        </div>
      </div>

      <CardContainer>
        {infoByNumber.map((el, index) => {
          return (
            <div key={index} className="col">
              <CardMain
                direction="row"
                height={8}
                icon={<el.icon size={50} className="fs-1 primary-color m-3" />}
                title={el.title}
                textStyle="black-text "
                paraText={el.paraText}
              />
            </div>
          );
        })}
      </CardContainer>

      <div className="container mt-3">
        <div className="row items-start">
          <div className="col col-12 col-sm-6">
            <img
              src="/assets/images/features.jpg"
              className="mw-100 h-100 object-fit-cover"
              alt="about"
            />
          </div>

          <div className="col col-12 col-sm-6">
            <SectionHeader
              textAlign="start"
              isSpaser={true}
              title="Enim quis est voluptatibus aliquid consequatur fugiat"
              subTitle="Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi"
            />
            {EnimQuisCards.map((el, index) => {
              return (
                <CardMain
                  iconShadow={true}
                  key={index}
                  direction="row"
                  height={8}
                  icon={
                    <el.icon size={20} className="rounded primary-color shadow icon-shadow" />
                  }
                  title={el.title}
                  textStyle='aboutCardtextStyle'
                  paraText={el.paraText}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
