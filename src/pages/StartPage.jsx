import React, { useState } from 'react';
import StartPageStyles from "../assets/css/StartPage.module.css";
import curlyBracesImg from "../assets/images/curlyBraces.png";
import angleBracketsImg from "../assets/images/angleBrackets.png";
import profileImg from "../assets/images/profileImg.png";
import hashtagImg from "../assets/images/hashtag.png";
import trichologist_final from "../assets/images/trycholog_final.png";
import RegionHub_final from "../assets/images/RegionHub.png";
import railsLogo from "../assets/images/railsIcon.png";
import rubyLogo from "../assets/images/rubyIcon.png";
import jsLogo from "../assets/images/javascriptIcon.png";
import cssLogo from "../assets/images/cssIcon.png";
import htmlLogo from "../assets/images/htmlIcon.png";
import mySqlLogo from "../assets/images/mySqlIcon.png";
import bootstrapLogo from "../assets/images/bootstrapIcon.png";
import sqlLiteLogo from "../assets/images/sqlIcon.png";
import dragAndDropGIF from "../assets/images/DragAndDropGIF.gif";
import { Link } from "react-scroll";
import { ChevronCompactDown } from "react-bootstrap-icons";
import { EnvelopeAtFill } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { TelephoneFill } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import {PROJECT_ONE} from "../assets/data/data.js";
import {PROJECT_TWO} from "../assets/data/data.js";
import Stamps3D from "../components/Stamps3D";
import ContactLine from "../components/ContactLine";
import ProjectPicture from "../components/ProjectPicture";
import ProjectTitle from "../components/ProjectTitle";
import ProjectDescription from "../components/ProjectDescripiton";
import TabButton from "../components/TabButton";
import TechnologiesCard from "../components/TechnologiesCard.jsx";


export default function StartPage() {

  const [selectedTopicTrichologist, setSelectedTopicTrichologist] = useState("about");
  const [selectedTopicRegionHub, setSelectedTopicRegionHub] = useState("about");

  const handleCopyToClipboard = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Skopiowano do schowka!');
  };

  function handleClickTrichologist(selectedButton){
    setSelectedTopicTrichologist(selectedButton);
  }

  function handleClickRegionHub(selectedButton){
    setSelectedTopicRegionHub(selectedButton);
  }

  const TrichologistIconsData = [
    { path: railsLogo, text: 'Rails', version: '7.1.1' },
    { path: rubyLogo, text: 'Ruby', version: '3.2.2' },
    { path: htmlLogo, text: 'HTML5'},
    { path: cssLogo, text: 'CSS3' },
    { path: bootstrapLogo, text: 'Bootstrap', version: '5.3.2' },
    { path: mySqlLogo, text: 'MySQL', version: '0.5.4' },
    { path: jsLogo, text: 'JavaScript' },
  ];

  const RegionHubIconsData = [
    { path: railsLogo, text: 'Rails', version: '7.0.7' },
    { path: rubyLogo, text: 'Ruby', version: '3.1.2' },
    { path: htmlLogo, text: 'HTML5'},
    { path: cssLogo, text: 'CSS3' },
    { path: bootstrapLogo, text: 'Bootstrap', version: '5.3.2' },
    { path: sqlLiteLogo, text: 'sqlite3', version: '1.4' },
    { path: jsLogo, text: 'JavaScript' },
  ];
  
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
        <div id="MyProjects">
          <div id="TrychologistApp">
            <div className={`${StartPageStyles.bottomSectionFirst}`}>
              <ProjectTitle
                projectName= "Trichologist app"
                projectShortDescription= "Users data - collection/processing/export"
              />
              <div className="row">
                <div className={`${StartPageStyles.picColumn} col-md-8`}>
                  <ProjectPicture 
                    src={trichologist_final}
                    customClassName={`${StartPageStyles.projectPic}`}
                  />
                </div>
                <div className={`${StartPageStyles.projectIconArea} col-auto my-auto`}>
                <TechnologiesCard
                    iconsData={TrichologistIconsData}
                  />
                </div>
              </div>
            </div>
            <div className={`${StartPageStyles.mainDescriptionArea} row`}>
              <div id="descriptionTrychologist" className={`${StartPageStyles.descriptionSection} col-md-6 px-5`}>
                <menu>
                  <TabButton onSelect={() => handleClickTrichologist('about')}>About</TabButton>
                  <TabButton onSelect={() => handleClickTrichologist('goal')}>Goal</TabButton>
                </menu>
                <div  className={`${StartPageStyles.mainDescriptionText} col-md-12 text-start`}>
                  {PROJECT_ONE[selectedTopicTrichologist].description}
                </div>
              </div>
            </div>
            <div className={`${StartPageStyles.mainDescriptionAreaEndTrichologist}`}></div>
          </div>

          <div id="RegionHub">
            <div className={`${StartPageStyles.bottomSectionBackgroundRegionHub}`}>
              <ProjectTitle
                projectName= "RegionHub"
                projectShortDescription= "Demographic data of regions in Poland and the USA - extensive database with analysis"
              />
              <div className="row">
                <div className={`${StartPageStyles.picColumn} col-md-8`}>
                  <ProjectPicture 
                    src={RegionHub_final}
                    customClassName={`${StartPageStyles.projectPic}`}
                  />
                </div>
                <div className={`${StartPageStyles.projectIconArea} col-auto my-auto`}>
                <TechnologiesCard
                    iconsData={RegionHubIconsData}
                  />
                </div>
              </div>
            </div>
            <div className={`${StartPageStyles.mainDescriptionArea} row`}>
              <div id="descriptionRegionHub" className={`${StartPageStyles.descriptionSection} col-md-6 px-5`}>
                <menu>
                  <TabButton onSelect={() => handleClickRegionHub('about')}>About</TabButton>
                  <TabButton onSelect={() => handleClickRegionHub('goal')}>Goal</TabButton>
                  <TabButton onSelect={() => handleClickRegionHub('algorithm')}>Algorithm</TabButton>
                </menu>
                <div  className={`${StartPageStyles.mainDescriptionText} col-md-12 text-start`}>
                  {PROJECT_TWO[selectedTopicRegionHub].description}
                </div>
              </div>
            </div>
            <div className={`${StartPageStyles.mainDescriptionAreaEndRegionHub}`}></div>
          </div>
        </div>
        <footer className={`${StartPageStyles.mainPageFooter} w-100 text-center`}>
          <a target="_blank" href="https://icons8.com" className={`${StartPageStyles.mainPageFooterText}`}>Icons by Icons8</a>
        </footer>
      </div>
    );
}