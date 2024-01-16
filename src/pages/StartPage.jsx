import React from "react";
import StartPageStyles from "../assets/css/StartPage.module.css";
import curlyBracesImg from "../assets/images/curlyBraces.png";
import angleBracketsImg from "../assets/images/angleBrackets.png";
import profileImg from "../assets/images/profileImg.png";
import hashtagImg from "../assets/images/hashtag.png";
import trichologist_final from "../assets/images/trycholog_final.png";
import railsLogo from "../assets/images/railsIcon.png";
import rubyLogo from "../assets/images/rubyIcon.png";
import jsLogo from "../assets/images/javascriptIcon.png";
import cssLogo from "../assets/images/cssIcon.png";
import htmlLogo from "../assets/images/htmlIcon.png";
import sqlLiteLogo from "../assets/images/mySqlIcon.png";
import bootstrapLogo from "../assets/images/bootstrapIcon.png";
import { Link } from "react-scroll";
import { ChevronCompactDown } from "react-bootstrap-icons";
import { EnvelopeAtFill } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { TelephoneFill } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import Stamps3D from "../components/Stamps3D";
import ContactLine from "../components/ContactLine";
import ProjectPicture from "../components/ProjectPicture";
import ProjectTitle from "../components/ProjectTitle";
import ProjectDescription from "../components/ProjectDescripiton";

export default function StartPage() {
  const handleCopyToClipboard = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Skopiowano do schowka!');
  };
  
  return (
      <div>
        <div className="row mt-2">
          <div className={`${StartPageStyles.containerStyle}`}>
            <img src={profileImg} alt="Profile" className={`${StartPageStyles.profilePic}`}/>
            <div className={`${StartPageStyles.greenCircleStyle}`}></div>
            <div className={`${StartPageStyles.spacing} row`}></div>
            <div className="row mx-2">
              <ul>
                  <div className="row">
                    <div className="col-auto">
                      <a href="https://github.com/bszarlowicz" target="_blank">
                        <ContactLine
                          icon={Github}
                          text="Github"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-auto">
                      <a href="https://www.linkedin.com/in/bartosz-szarlowicz/" target="_blank">
                        <ContactLine
                          icon={Linkedin}
                          text="Linkedin"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-auto">
                      <div onClick={() => handleCopyToClipboard('+48 506 492 177')} className={`${StartPageStyles.contact}`}>
                        <ContactLine
                          icon={TelephoneFill}
                          text="+48 506 492 177"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-auto">
                      <div onClick={() => handleCopyToClipboard('szarlowiczbartosz2311@gmail.com')} className={`${StartPageStyles.contact}`}>
                        <ContactLine
                          icon={EnvelopeAtFill}
                          text="szarlowiczbartosz2311@gmail.com"
                        />
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
          </div>
          <div className={`${StartPageStyles.welcomeTextSection} col-md-10`}>
            <div className="row">
              <div className="col-md-1"></div>
              <div
                className={`${StartPageStyles.mainHeaderWelcome1} col-auto mx-3`}
              >
                Welcome,
              </div>
            </div>
            <div className="row">
              <div className="col-md-1"></div>
              <div
                className={`${StartPageStyles.mainHeaderWelcome2} col-auto mx-3`}
              >
                I'm Bartosz Szarłowicz
              </div>
            </div>
            <div className="row">
              <div className="col-md-1"></div>
              <div
                className={`${StartPageStyles.mainHeader} col-auto mx-3`}
              >
                Fullstack Developer
                <Stamps3D
                  img={angleBracketsImg}
                  altText="Curly Braces"
                  customClassName={`${StartPageStyles.customImg} ${StartPageStyles.delayedAnimation2}`}
                />
              </div>
            <div className="row">
              <div className="col-md-1"></div>
              <div
                className={`${StartPageStyles.mainHeaderDescription} col `}
              >
                I'm a dedicated web developer with six months of hands-on commercial experience. My journey in the world of web development began with a passion for clean and efficient code.
              </div>
              <div className="col-md-4"></div>
            </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <Link
              to="MyProjects"
              spy={true}
              smooth={true}
              duration={500}
            >
              <ChevronCompactDown
                className={`${StartPageStyles.bouncingIcon} ${StartPageStyles.customArrow}`}
              />
              <div className="row">
                <div className="col-md-12">
                  <span className={`${StartPageStyles.arrrowDescription}`}>Check out my work</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div  id="MyProjects" className={`${StartPageStyles.bottomSection}`}>
          <ProjectTitle
            projectName= "Trichologist app"
            projectShortDescription= "Users data - collection/processing/export"
          />
          <div className="row">
            <div className="col-md-8">
              <ProjectPicture 
                src={trichologist_final}
                customClassName={`${StartPageStyles.trichologistPic}`}
              />
            </div>
            <div className={`${StartPageStyles.trichologistIconArea} col-auto my-auto`}>
              <div className={`${StartPageStyles.iconContainer}`}>
                <div className="row">
                  <div className="col-md-12 py-2">
                    Technologies
                  </div>
                </div>
                <div className="row">
                  <div className={`${StartPageStyles.iconWrapper} col-3`}>
                    <img
                      src={railsLogo}
                      className={`${StartPageStyles.trichologistDescriptionIcon}`}
                    />
                    <span className={`${StartPageStyles.textOnHover}`}>Rails<p className={`${StartPageStyles.textOnHoverVersion}`}>7.1.1</p></span>
                  </div>
                  <div className={`${StartPageStyles.iconWrapper} col-3`}>
                    <img
                      src={rubyLogo}
                      className={`${StartPageStyles.trichologistDescriptionIcon}`}
                    />
                    <span className={`${StartPageStyles.textOnHover}`}>Ruby<p className={`${StartPageStyles.textOnHoverVersion}`}>3.2.2</p></span>
                  </div>
                  <div className={`${StartPageStyles.iconWrapper} col-3`}>
                    <img
                      src={htmlLogo}
                      className={`${StartPageStyles.trichologistDescriptionIcon}`}
                    />
                    <span className={`${StartPageStyles.textOnHover}`}>HTML5</span>
                  </div>
                  <div className={`${StartPageStyles.iconWrapper} col-3`}>
                    <img
                      src={cssLogo}
                      className={`${StartPageStyles.trichologistDescriptionIcon}`}
                    />
                    <span className={`${StartPageStyles.textOnHover}`}>CSS3</span>
                  </div>
                  <div className={`${StartPageStyles.iconWrapper} col`}>
                    <img
                      src={bootstrapLogo}
                      className={`${StartPageStyles.trichologistDescriptionIcon}`}
                    />
                    <span className={`${StartPageStyles.textOnHover}`}>Bootstrap<p className={`${StartPageStyles.textOnHoverVersion}`}>5.3.2</p></span>
                  </div>
                  <div className={`${StartPageStyles.iconWrapper} col`}>
                    <img
                      src={sqlLiteLogo}
                      className={`${StartPageStyles.trichologistDescriptionIcon}`}
                    />
                    <span className={`${StartPageStyles.textOnHover}`}>MySQL<p className={`${StartPageStyles.textOnHoverVersion}`}>0.5.4</p></span>
                  </div>
                  <div className={`${StartPageStyles.iconWrapper} col`}>
                    <img
                      src={jsLogo}
                      className={`${StartPageStyles.trichologistDescriptionIcon}`}
                    />
                    <span className={`${StartPageStyles.textOnHover}`}>JavaScript</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
        </div>
        <div className={`${StartPageStyles.mainDescriptionArea} row px-5`}>
          <div className="col-md-6 px-5">
            <ProjectDescription
              header="About"
              content="I was a member of the development team that focused on building an application based on Ruby on Rails technology. Our application was designed with the aim of facilitating research and efficiently collecting diverse data, including tracking user activity on the website."
            />
          </div>
          <div className="col-md-6 px-5">
            <ProjectDescription
              header="Goal"
              content="We emphasized delivering innovative solutions that not only provided a clear user interface but also a functional admin panel, offering full control over the data. Our goal was to make our application not only technologically advanced but also user-friendly, meeting expectations, and providing convenient data management tools."
            />
          </div>
        </div>
        <div className={`${StartPageStyles.mainDescriptionAreaEnd}`}></div>
        <footer className={`${StartPageStyles.mainPageFooter} w-100 text-center`}>
          <a target="_blank" href="https://icons8.com" className={`${StartPageStyles.mainPageFooterText}`}>Icons by Icons8</a>
        </footer>
      </div>
    );
}