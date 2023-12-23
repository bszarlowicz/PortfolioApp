import React from "react";
import StartPageStyles from "../assets/css/StartPage.module.css";
import curlyBracesImg from "../assets/images/curlyBraces.png";
import angleBracketsImg from "../assets/images/angleBrackets.png";
import profileImg from "../assets/images/profileImg.png";
import hashtagImg from "../assets/images/hashtag.png";
import { Link } from "react-scroll";
import { ChevronCompactDown } from "react-bootstrap-icons";
import { EnvelopeAtFill } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { TelephoneFill } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import Stamps3D from "../components/Stamps3D";
import ContactLine from "../components/ContactLine";

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
          <div className={`${StartPageStyles.containerStyle} col-md-2`}>
            <img src={profileImg} alt="Profile" className={`${StartPageStyles.profilePic}`}/>
            <div className={`${StartPageStyles.greenCircleStyle}`}></div>
          </div>
          <div className="row mt-3 mx-2">
            <ul>
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
                  <a href="https://github.com/bszarlowicz" target="_blank">
                    <ContactLine
                      icon={Github}
                      text="Github"
                    />
                  </a>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className={`${StartPageStyles.verticalCenter}`}>
          <div className="row">
            <div
              className={`${StartPageStyles.mainHeader} col-md-12 text-center`}
            >
              Fullstack Developer
            </div>
          </div>
          <div className="row ">
              <Stamps3D
                img={curlyBracesImg}
                altText="Curly Braces"
                customClassName={`${StartPageStyles.customImg}`}
              />
              <Stamps3D
                img={hashtagImg}
                altText="Curly Braces"
                customClassName={`${StartPageStyles.customImg} ${StartPageStyles.delayedAnimation1}`}
              />
              <Stamps3D
                img={angleBracketsImg}
                altText="Curly Braces"
                customClassName={`${StartPageStyles.customImg} ${StartPageStyles.delayedAnimation2}`}
              />
          </div>
          <div className="row mt-4">
            <div className="col-md-12 text-center">
              <Link
                to="MyProjects"
                spy={true}
                smooth={true}
                duration={500}
                className={`${StartPageStyles.customArrow}`}
              >
                <ChevronCompactDown
                  className={`${StartPageStyles.boucingIcon}`}
                />
              </Link>
            </div>
          </div>
          <div  id="MyProjects"className={`${StartPageStyles.bottomSection}`}></div>
        </div>
      </div>
    );
}
