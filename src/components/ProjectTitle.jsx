import StartPageStyles from "../assets/css/startPage.module.css";

export default function ProjectTitle({ projectName, projectShortDescription }) {
    return (
        <div>
            <div className="row mx-5">
                <div className={`${StartPageStyles.greenDotProjects} col-1`}></div>
                <div className={`${StartPageStyles.projectTitle} col-auto`}>
                    {projectName}
                </div>
            </div>
            <div className="row">
                <div className="col-1"></div>
                <div className={`${StartPageStyles.projectSubTitle} col-auto`}>
                    {projectShortDescription}
                </div>
            </div>
        </div>
      );
}