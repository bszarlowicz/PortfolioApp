import StartPageStyles from "../assets/css/startPage.module.css";

export default function DevelopmentTeam({developmentTeamData, githubIcon}) {
    return (
        <div>
            <div>
                Development Team
            </div>
            <div className='row mt-3'>
                {developmentTeamData.map((member, index) => (
                    <div key={index} className={`${StartPageStyles.iconWrapperDevelopment} col`}>
                        <a href={member.githubLink} target="_blank" className={`${StartPageStyles.noDecorations}`}>
                            <img src={member.profileImgPath} alt="Profile" className={`${StartPageStyles.profilePic} ${StartPageStyles.developmentTeamPics}`}/>
                            <div className={`${StartPageStyles.iconOnHover}`}>
                                <img src={githubIcon} alt="githubIcon"/>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
      );
}