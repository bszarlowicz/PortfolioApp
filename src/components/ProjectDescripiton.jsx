import StartPageStyles from "../assets/css/StartPage.module.css";

export default function ProjectDescription({ header, content }) {

    return (
        <div>
            <div className="row">
                {header}
            </div>
            <div className="row">
                <div className={`${StartPageStyles.mainDescriptionText} col-md-12 text-start`}>
                    <p>{content}</p>
                </div>
            </div>
        </div>
      );
}