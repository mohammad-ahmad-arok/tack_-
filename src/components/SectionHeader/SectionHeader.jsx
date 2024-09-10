import "./SectionHeader.css";

const SectionHeader = ({ title, subTitle, isSpaser, textAlign, titleSize }) => {
  return (
    <div className="section-header container">
      <div className={`row m-2 text-${textAlign} justify-content-${textAlign}`}>
        <h2 style={{ fontSize: `${titleSize}px` }}>{title}</h2>
        {isSpaser ? (
          <span
            className={`${textAlign == "start" ? "mx-3" : ""}`}
            id="spaser"
          ></span>
        ) : (
          ""
        )}
        <p className="mt-3">{subTitle}</p>
      </div>
    </div>
  );
};

export default SectionHeader;
