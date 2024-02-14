import StartPageStyles from "../assets/css/startPage.module.css";

export default function ProjectLinks({ firstLink, secondLink, firstIcon, secondIcon, firstCaption, secondCaption}) {
    return (
        <div className='row mt-5'>
            <div className='col-6'>
                <a href={firstLink} target="_blank" className={`${StartPageStyles.noDecorations}`}>
                    <img src={firstIcon} alt="githubIcon" className={`${StartPageStyles.socialsIcons}`}/>
                    <div className={`${StartPageStyles.additionalTextSocials}`}>
                        {firstCaption}
                    </div>
                </a>
            </div>
            <div className='col-6 pt-1'>
                <a href={secondLink} target="_blank" className={`${StartPageStyles.noDecorations}`}>
                    <img src={secondIcon} alt="pdfIcon" className={`${StartPageStyles.socialsIcons}`}/>
                    <div className={`${StartPageStyles.additionalTextSocials} mt-1`}>
                        {secondCaption}
                    </div>
                </a>
            </div>
      </div>
      );
}