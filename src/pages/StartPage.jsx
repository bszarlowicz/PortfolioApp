import React, { useState } from 'react';
import StartPageStyles from "../assets/css/StartPage.module.css";
import angleBracketsImg from "../assets/images/angleBrackets.png";
import profileImg from "../assets/images/profileImg.png";
import profileImgAntek from "../assets/images/Antek.png";
import profileImgMaciek from "../assets/images/Maciek.jpg";
import trichologist_final from "../assets/images/trycholog_final.png";
import RegionHub_final from "../assets/images/RegionHub.png";
import delivery_final from "../assets/images/delivery_final.png";
import PomodoroApp_final from "../assets/images/PomodoroTechnique1.png";
import railsLogo from "../assets/images/railsIcon.png";
import rubyLogo from "../assets/images/rubyIcon.png";
import jsLogo from "../assets/images/javascriptIcon.png";
import cssLogo from "../assets/images/cssIcon.png";
import htmlLogo from "../assets/images/htmlIcon.png";
import mySqlLogo from "../assets/images/mySqlIcon.png";
import bootstrapLogo from "../assets/images/bootstrapIcon.png";
import sqlLiteLogo from "../assets/images/sqlIcon.png";
import nodejsIcon from "../assets/images/nodejsIcon.png";
import reactIcon from "../assets/images/reactIcon.png";
import githubIcon from "../assets/images/githubIcon.png";
import whiteGithubIcon from "../assets/images/whiteGithubIcon.png";
import pdfIcon from "../assets/images/pdfIcon.png";
import webIcon from "../assets/images/webIcon.png";
import { Link } from "react-scroll";
import { ChevronCompactDown } from "react-bootstrap-icons";
import { EnvelopeAtFill } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { TelephoneFill } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import {PROJECT_ONE} from "../assets/data/data.js";
import {PROJECT_TWO} from "../assets/data/data.js";
import {PROJECT_THREE} from "../assets/data/data.js";
import {PROJECT_FOUR} from "../assets/data/data.js";
import Stamps3D from "../components/Stamps3D";
import ContactLine from "../components/ContactLine";
import ProjectPicture from "../components/ProjectPicture";
import ProjectTitle from "../components/ProjectTitle";
import ProjectDescription from "../components/ProjectDescripiton";
import TabButton from "../components/TabButton";
import TechnologiesCard from "../components/TechnologiesCard.jsx";
import DevelopmentTeam from "../components/DevelopmentTeam.jsx";
import ProjectLinks from "../components/ProjectLinks.jsx";


export default function StartPage() {

  const [selectedTopicTrichologist, setSelectedTopicTrichologist] = useState("about");
  const [selectedTopicRegionHub, setSelectedTopicRegionHub] = useState("about");
  const [selectedTopicDeliveryApp, setSelectedTopicDeliveryApp] = useState("about");
  const [selectedTopicPomodoroApp, setSelectedTopicPomodoroApp] = useState("about");
  const [activeButton, setActiveButton] = useState(null);

  const handleCopyToClipboard = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Skopiowano do schowka!');
  };

  const handleClick = (button) => {
    if (activeButton !== null) {
      activeButton.classList.remove('active');
    }

    button.classList.add('active');
    setActiveButton(button);
  };


  

  function handleClickTrichologist(selectedButton){
    setSelectedTopicTrichologist(selectedButton);
  }

  function handleClickRegionHub(selectedButton){
    setSelectedTopicRegionHub(selectedButton);
  }

  function handleClickDeliveryApp(selectedButton){
    setSelectedTopicDeliveryApp(selectedButton);
  }

  function handleClickPomodoroApp(selectedButton){
    setSelectedTopicPomodoroApp(selectedButton);
  }

  const TrichologistIconsData = [
    { path: railsLogo, text: 'Rails', version: '7.1.1' },
    { path: rubyLogo, text: 'Ruby', version: '3.2.2' },
    { path: jsLogo, text: 'JavaScript' },
    { path: mySqlLogo, text: 'MySQL', version: '0.5.4' },
    { path: cssLogo, text: 'CSS3' },
    { path: bootstrapLogo, text: 'Bootstrap', version: '5.3.2' },
    { path: htmlLogo, text: 'HTML5'},
  ];

  const RegionHubIconsData = [
    { path: railsLogo, text: 'Rails', version: '7.0.7' },
    { path: rubyLogo, text: 'Ruby', version: '3.1.2' },
    { path: jsLogo, text: 'JavaScript' },
    { path: sqlLiteLogo, text: 'sqlite3', version: '1.4' },
    { path: cssLogo, text: 'CSS3' },
    { path: bootstrapLogo, text: 'Bootstrap', version: '5.3.2' },
    { path: htmlLogo, text: 'HTML5'},
  ];

  const DeliveryAppIconsData = [
    { path: reactIcon, text: 'React', version: '^18.2.0' },
    { path: nodejsIcon, text: 'Node.js', version: '18.17.1' },
    { path: jsLogo, text: 'JavaScript' },
    { path: mySqlLogo, text: 'MySQL'},
    { path: cssLogo, text: 'CSS3' },
    { path: bootstrapLogo, text: 'Bootstrap', version: '5.3.2' },
    { path: htmlLogo, text: 'HTML5'},
  ];

  const DeliveryAppDevelopmentTeamData = [
    { profileImgPath: profileImg, githubLink: "https://github.com/bszarlowicz"},
    { profileImgPath: profileImgAntek, githubLink: "https://github.com/AntWalach"},
    { profileImgPath: profileImgMaciek, githubLink: "https://github.com/maciek102"},
  ];

  const PomodoroAppIconsData = [
    { path: jsLogo, text: 'JavaScript', version: 'Vanilla'},
    { path: cssLogo, text: 'CSS3' },
    { path: htmlLogo, text: 'HTML5'},
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

          <div id="DeliveryApp">
            <div className={`${StartPageStyles.bottomSectionBackgroundDeliveryApp}`}>
              <ProjectTitle
                projectName= "Delivery app"
                projectShortDescription= "Software for a delivery company - handling shipments (customer/courier/admin)"
              />
              <div className="row">
                <div className={`${StartPageStyles.picColumn} col-md-8`}>
                  <ProjectPicture 
                    src={delivery_final}
                    customClassName={`${StartPageStyles.projectPic}`}
                  />
                </div>
                <div className={`${StartPageStyles.projectIconArea} col-auto my-auto`}>
                <TechnologiesCard
                    iconsData={DeliveryAppIconsData}
                  />
                </div>
              </div>
            </div>
            <div className={`${StartPageStyles.mainDescriptionArea} row`}>
              <div id="descriptionDeliveryApp" className={`${StartPageStyles.descriptionSection} col-md-6 px-5`}>
                <menu>
                  <TabButton onSelect={() => handleClickDeliveryApp('about')}>About</TabButton>
                  <TabButton onSelect={() => handleClickDeliveryApp('goal')}>Goal</TabButton>
                  <TabButton onSelect={() => handleClickDeliveryApp('purpose')}>Purpose</TabButton>
                </menu>
                <div  className={`${StartPageStyles.mainDescriptionText} col-md-12 text-start`}>
                  {PROJECT_THREE[selectedTopicDeliveryApp].description}
                </div>
              </div>
              <div className={`${StartPageStyles.developmentTeamHeader} col-auto mx-auto text-center`}>
                <DevelopmentTeam
                  developmentTeamData={DeliveryAppDevelopmentTeamData}
                  githubIcon={whiteGithubIcon}
                />
                <ProjectLinks
                  firstLink="https://github.com/bszarlowicz/On-demand-Delivery-Platform"
                  secondLink="#"
                  firstIcon={githubIcon}
                  secondIcon={pdfIcon}
                  firstCaption="Check out sorce code!"
                  secondCaption="Check out docs!"
                />
              </div>
            </div>
            <div className={`${StartPageStyles.mainDescriptionAreaEndDeliveryApp}`}></div>
          </div>
          <div id="PomodoroApp">
            <div className={`${StartPageStyles.bottomSectionBackgroundRegionHub}`}>
              <ProjectTitle
                projectName= "Pomodoro clock"
                projectShortDescription= "An application for measuring working time - effective work with the pomodoro technique"
              />
              <div className="row">
                <div className={`${StartPageStyles.picColumn} col-md-8`}>
                  <ProjectPicture 
                    src={PomodoroApp_final}
                    customClassName={`${StartPageStyles.projectPic}`}
                  />
                </div>
                <div className={`${StartPageStyles.projectIconArea} col-auto my-auto`}>
                <TechnologiesCard
                    iconsData={PomodoroAppIconsData}
                  />
                </div>
              </div>
            </div>
            <div className={`${StartPageStyles.mainDescriptionArea} row`}>
              <div id="descriptionPomodoroApp" className={`${StartPageStyles.descriptionSection} col-md-6 px-5`}>
                <menu>
                  <TabButton onSelect={() => handleClickPomodoroApp('about')}>About</TabButton>
                </menu>
                <div  className={`${StartPageStyles.mainDescriptionText} col-md-12 text-start`}>
                  {PROJECT_FOUR[selectedTopicPomodoroApp].description}
                </div>
              </div>
              <div className={`${StartPageStyles.developmentTeamHeader} col-auto mx-auto text-center w-25 pt-5 mt-3`}>
              <ProjectLinks
                  firstLink="https://github.com/bszarlowicz/pomodoro-techinque-webiste"
                  secondLink="https://pomodoro-technique-bszarlowicz.netlify.app"
                  firstIcon={githubIcon}
                  secondIcon={webIcon}
                  firstCaption="Check out sorce code!"
                  secondCaption="Try it!"
                />
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