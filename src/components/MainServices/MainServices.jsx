import { cardConeners } from "../../constants";
import CardMain from "../Card/Card";
import CardContainer from "../CardContainer/CardContainer";
import "./MainServices.css";

const MainServices = () => {
  return (
    <CardContainer>
      {cardConeners.map((el, index) => {
        return (
          <div key={index} className="col">
            <CardMain
              height={18}
              icon={<el.icon className="fs-1 primary-color m-3" />}
              title={el.title}
              paraText={el.paraText}
            />
          </div>
        );
      })}
    </CardContainer>
  );
};

export default MainServices;
