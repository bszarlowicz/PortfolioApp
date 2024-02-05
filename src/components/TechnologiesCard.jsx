import StartPageStyles from "../assets/css/StartPage.module.css";

export default function TechnologiesCard ({ iconsData }) {
    return (
      <div className={`${StartPageStyles.iconContainer}`}>
        <div className="row">
          <div className="col-md-12 py-2">
            Technologies
          </div>
        </div>
        <div className="row">
          {iconsData.map((icon, index) => (
            <div key={index} className={`${StartPageStyles.iconWrapper} col-md-3 mx-auto`}>
              <img
                src={icon.path}
                className={`${StartPageStyles.trichologistDescriptionIcon}`}
              />
              <span className={`${StartPageStyles.textOnHover}`}>
                {icon.text}
                {icon.version && <p className={`${StartPageStyles.textOnHoverVersion}`}>{icon.version}</p>}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };