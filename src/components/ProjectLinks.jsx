import StartPageStyles from "../assets/css/StartPage.module.css";
import pdfIcon from "../assets/images/pdfIcon.png";
import githubIcon from "../assets/images/githubIcon.png";

export default function ProjectLinks({ projectGithubLink, projectDocsLink }) {
    return (
        <div className='row mt-5'>
            <div className='col-6'>
                <a href={projectGithubLink} target="_blank" className={`${StartPageStyles.noDecorations}`}>
                    <img src={githubIcon} alt="githubIcon" className={`${StartPageStyles.socialsIcons}`}/>
                    <div className={`${StartPageStyles.additionalTextSocials}`}>
                        Check out sorce code!
                    </div>
                </a>
            </div>
            <div className='col-6 pt-1'>
                <a href={projectDocsLink} target="_blank" className={`${StartPageStyles.noDecorations}`}>
                    <img src={pdfIcon} alt="pdfIcon" className={`${StartPageStyles.socialsIcons}`}/>
                    <div className={`${StartPageStyles.additionalTextSocials} mt-1`}>
                        Check out docs!
                    </div>
                </a>
            </div>
      </div>
      );
}