import React, { useState } from 'react';
import startPageStyles from "../assets/css/StartPage.module.css";
import angleBracketsImg from "../assets/images/angleBrackets.png";
import profileImg from "../assets/images/profileImg.png";
import profileImgAntek from "../assets/images/Antek.png";
import profileImgMaciek from "../assets/images/Maciek.jpg";
import trichologist_final from "../assets/images/trycholog_final.png";
import RegionHub_final from "../assets/images/RegionHub.png";
import delivery_final from "../assets/images/delivery_final.png";
import pomodoroApp_final from "../assets/images/PomodoroTechnique1.png";
import dragAndDrop_final from "../assets/images/DragAndDropApp.png";
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
import whiteLinkedInIcon from "../assets/images/whiteLinkedInIcon.png";
import pdfIcon from "../assets/images/pdfIcon.png";
import webIcon from "../assets/images/webIcon.png";
import { Link } from "react-scroll";
import { ChevronCompactDown } from "react-bootstrap-icons";
import { EnvelopeAtFill } from "react-bootstrap-icons";
import { Linkedin } from "react-bootstrap-icons";
import { TelephoneFill } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import ProgressBar from 'react-bootstrap/ProgressBar';
import {PROJECT_ONE} from "../assets/data/data.js";
import {PROJECT_TWO} from "../assets/data/data.js";
import {PROJECT_THREE} from "../assets/data/data.js";
import {PROJECT_FOUR} from "../assets/data/data.js";
import {PROJECT_FIVE} from "../assets/data/data.js";
import Stamps3D from "../components/Stamps3D";
import ContactLine from "../components/ContactLine";
import ProjectPicture from "../components/ProjectPicture";
import ProjectTitle from "../components/ProjectTitle";
import ProjectDescription from "../components/ProjectDescripiton";
import TabButton from "../components/TabButton";
import TechnologiesCard from "../components/TechnologiesCard.jsx";
import DevelopmentTeam from "../components/DevelopmentTeam.jsx";
import ProjectLinks from "../components/ProjectLinks.jsx";
import demoDragAndDrop from "../assets/videos/DragAndDrop.mp4";
import deliveryAppDocs from "../assets/data/DeliveryAppDocs.pdf";


export default function StartPage() {

  const [selectedTopicTrichologist, setSelectedTopicTrichologist] = useState("about");
  const [selectedTopicRegionHub, setSelectedTopicRegionHub] = useState("about");
  const [selectedTopicDeliveryApp, setSelectedTopicDeliveryApp] = useState("about");
  const [selectedTopicDragAndDropApp, setSelectedTopicDragAndDropApp] = useState("about");
  const [selectedTopicPomodoroApp, setSelectedTopicPomodoroApp] = useState("about");

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

  function handleClickDeliveryApp(selectedButton){
    setSelectedTopicDeliveryApp(selectedButton);
  }

  function handleClickDragAndDropApp(selectedButton){
    setSelectedTopicDragAndDropApp(selectedButton);
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
    { profileImgPath: profileImg, githubLink: "https://www.linkedin.com/in/bartosz-szarlowicz/"},
    { profileImgPath: profileImgAntek, githubLink: "https://www.linkedin.com/in/antoni-walach/"},
    { profileImgPath: profileImgMaciek, githubLink: "https://www.linkedin.com/in/maciej-walczak-388895270/"},
  ];

  const DragAndDropData = [
    { path: railsLogo, text: 'Rails', version: '7.1.2' },
    { path: rubyLogo, text: 'Ruby', version: '3.2.2' },
    { path: jsLogo, text: 'JavaScript' },
    { path: sqlLiteLogo, text: 'sqlite3', version: '1.4' },
    { path: htmlLogo, text: 'HTML5'},
    { path: bootstrapLogo, text: 'Bootstrap', version: '5.1.3' },
    { path: cssLogo, text: 'CSS3' },
  ];

  const PomodoroAppIconsData = [
    { path: jsLogo, text: 'JavaScript', version: 'Vanilla'},
    { path: cssLogo, text: 'CSS3' },
    { path: htmlLogo, text: 'HTML5'},
  ];
  
  return (
      <div>
        <div className="row mt-2">
          <div className={`${startPageStyles.containerStyle}`}>
            <img src={profileImg} alt="Profile" className={`${startPageStyles.profilePic}`}/>
            <div className={`${startPageStyles.greenCircleStyle}`}></div>
            <div className={`${startPageStyles.spacing} row`}></div>
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
                      <div onClick={() => handleCopyToClipboard('+48 506 492 177')} className={`${startPageStyles.contact}`}>
                        <ContactLine
                          icon={TelephoneFill}
                          text="+48 506 492 177"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-auto">
                      <div onClick={() => handleCopyToClipboard('szarlowiczbartosz2311@gmail.com')} className={`${startPageStyles.contact}`}>
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
          <div className={`${startPageStyles.welcomeTextSection} col-md-10`}>
            <div className="row">
              <div className="col-md-1"></div>
              <div
                className={`${startPageStyles.mainHeaderWelcome1} col-auto mx-3`}
              >
                Welcome,
              </div>
            </div>
            <div className="row">
              <div className="col-md-1"></div>
              <div
                className={`${startPageStyles.mainHeaderWelcome2} col-auto mx-3`}
              >
                I'm Bartosz Szarłowicz
              </div>
            </div>
            <div className="row">
              <div className="col-md-1"></div>
              <div
                className={`${startPageStyles.mainHeader} col-auto mx-3`}
              >
                Fullstack Developer
                <Stamps3D
                  img={angleBracketsImg}
                  altText="Curly Braces"
                  customClassName={`${startPageStyles.customImg} ${startPageStyles.delayedAnimation2}`}
                />
              </div>
            <div className="row">
              <div className="col-md-1"></div>
              <div
                className={`${startPageStyles.mainHeaderDescription} col `}
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
                className={`${startPageStyles.bouncingIcon} ${startPageStyles.customArrow}`}
              />
              <div className="row">
                <div className="col-md-12">
                  <span className={`${startPageStyles.arrrowDescription}`}>Check out my work</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div id="MyProjects">
          <div id="TrychologistApp">
            <div className={`${startPageStyles.bottomSectionFirst}`}>
              <ProjectTitle
                projectName= "Trichologist app"
                projectShortDescription= "Users data - collection/processing/export"
              />
              <div className="row">
                <div className={`${startPageStyles.picColumn} col-md-8`}>
                  <ProjectPicture 
                    src={trichologist_final}
                    customClassName={`${startPageStyles.projectPic}`}
                  />
                </div>
                <div className={`${startPageStyles.projectIconArea} col-auto my-auto`}>
                <TechnologiesCard
                    iconsData={TrichologistIconsData}
                  />
                </div>
              </div>
            </div>
            <div className={`${startPageStyles.mainDescriptionArea} row`}>
              <div id="descriptionTrychologist" className={`${startPageStyles.descriptionSection} col-md-6`}>
                <menu className='my-0'>
                  <TabButton onSelect={() => handleClickTrichologist('about')} isActive={selectedTopicTrichologist==="about"}>About</TabButton>
                  <TabButton onSelect={() => handleClickTrichologist('goal')} isActive={selectedTopicTrichologist==="goal"}>Goal</TabButton>
                </menu>
                <div  className={`${startPageStyles.mainDescriptionText} col-md-12 text-start`}>
                  {PROJECT_ONE[selectedTopicTrichologist].description}
                </div>
              </div>
            </div>
            <div className={`${startPageStyles.mainDescriptionAreaEndTrichologist}`}></div>
          </div>

          <div id="RegionHub">
            <div className={`${startPageStyles.bottomSectionBackgroundRegionHub}`}>
              <ProjectTitle
                projectName= "RegionHub"
                projectShortDescription= "Demographic data of regions in Poland and the USA - extensive database with analysis"
              />
              <div className="row">
                <div className={`${startPageStyles.picColumn} col-md-8`}>
                  <ProjectPicture 
                    src={RegionHub_final}
                    customClassName={`${startPageStyles.projectPic}`}
                  />
                </div>
                <div className={`${startPageStyles.projectIconArea} col-auto my-auto`}>
                <TechnologiesCard
                    iconsData={RegionHubIconsData}
                  />
                </div>
              </div>
            </div>
            <div className={`${startPageStyles.mainDescriptionArea} row`}>
              <div id="descriptionRegionHub" className={`${startPageStyles.descriptionSection} col-md-6`}>
                <menu  className='my-0'>
                  <TabButton onSelect={() => handleClickRegionHub('about')} isActive={selectedTopicRegionHub==="about"}>About</TabButton>
                  <TabButton onSelect={() => handleClickRegionHub('goal')} isActive={selectedTopicRegionHub==="goal"}>Goal</TabButton>
                  <TabButton onSelect={() => handleClickRegionHub('algorithm')} isActive={selectedTopicRegionHub==="algorithm"}>Algorithm</TabButton>
                </menu>
                <div  className={`${startPageStyles.mainDescriptionText} col-md-12 text-start`}>
                  {PROJECT_TWO[selectedTopicRegionHub].description}
                </div>
              </div>
            </div>
            <div className={`${startPageStyles.mainDescriptionAreaEndRegionHub}`}></div>
          </div>

          <div id="DeliveryApp">
            <div className={`${startPageStyles.bottomSectionBackgroundDeliveryApp}`}>
              <ProjectTitle
                projectName= "Delivery app"
                projectShortDescription= "Software for a delivery company - handling shipments (customer/courier/admin)"
              />
              <div className="row">
                <div className={`${startPageStyles.picColumn} col-md-8`}>
                  <ProjectPicture 
                    src={delivery_final}
                    customClassName={`${startPageStyles.projectPic}`}
                  />
                </div>
                <div className={`${startPageStyles.projectIconArea} col-auto my-auto`}>
                <TechnologiesCard
                    iconsData={DeliveryAppIconsData}
                  />
                </div>
              </div>
            </div>
            <div className={`${startPageStyles.mainDescriptionArea} row`}>
              <div id="descriptionDeliveryApp" className={`${startPageStyles.descriptionSection} col-md-6`}>
                <menu  className='my-0'>
                  <TabButton onSelect={() => handleClickDeliveryApp('about')} isActive={selectedTopicDeliveryApp==="about"}>About</TabButton>
                  <TabButton onSelect={() => handleClickDeliveryApp('goal')} isActive={selectedTopicDeliveryApp==="goal"}>Goal</TabButton>
                  <TabButton onSelect={() => handleClickDeliveryApp('purpose')} isActive={selectedTopicDeliveryApp==="purpose"}>Purpose</TabButton>
                </menu>
                <div  className={`${startPageStyles.mainDescriptionText} col-md-12 text-start`}>
                  {PROJECT_THREE[selectedTopicDeliveryApp].description}
                </div>
              </div>
              <div className={`${startPageStyles.developmentTeamHeader} col-auto mx-auto text-center`}>
                <DevelopmentTeam
                  developmentTeamData={DeliveryAppDevelopmentTeamData}
                  githubIcon={whiteLinkedInIcon}
                />
                <ProjectLinks
                  firstLink="https://github.com/bszarlowicz/On-demand-Delivery-Platform"
                  secondLink={deliveryAppDocs}
                  firstIcon={githubIcon}
                  secondIcon={pdfIcon}
                  firstCaption="Check out sorce code!"
                  secondCaption="Check out docs!"
                />
              </div>
            </div>
            <div className={`${startPageStyles.mainDescriptionAreaEndDeliveryApp}`}></div>
          </div>

          <div id="DragAndDropApp">
            <div className={`${startPageStyles.bottomSectionBackgroundDragAndDropApp}`}>
              <ProjectTitle
                projectName= "Sentence Puzzle"
                projectShortDescription= "HTML Drag and Drop API implementation - composing random words using the drag and drop method"
              />
              <div className="row">
                <div className={`${startPageStyles.picColumn} col-md-8`}>
                  <ProjectPicture 
                    src={dragAndDrop_final}
                    customClassName={`${startPageStyles.projectPic}`}
                  />
                </div>
                <div className={`${startPageStyles.projectIconArea} col-auto my-auto`}>
                <TechnologiesCard
                    iconsData={DragAndDropData}
                  />
                </div>
              </div>
            </div>
            <div className={`${startPageStyles.mainDescriptionArea} row`}>
              <div id="descriptionDragAndDropApp" className={`${startPageStyles.descriptionSection} col-md-6`}>
                <menu  className='my-0'>
                  <TabButton onSelect={() => handleClickDragAndDropApp('about')} isActive={selectedTopicDragAndDropApp==="about"}>About</TabButton>
                  <TabButton onSelect={() => handleClickDragAndDropApp('goal')} isActive={selectedTopicDragAndDropApp==="goal"}>Goal</TabButton>
                  <TabButton onSelect={() => handleClickDragAndDropApp('docker')} isActive={selectedTopicDragAndDropApp==="docker"}>Docker config</TabButton>
                </menu>
                <div  className={`${startPageStyles.mainDescriptionText} col-md-12 text-start`}>
                  {PROJECT_FIVE[selectedTopicDragAndDropApp].description}
                </div>
              </div>
              <div className={`${startPageStyles.developmentTeamHeader} col-auto mx-auto text-center w-25 pt-5 mt-3`}>
              <ProjectLinks
                  firstLink="https://github.com/bszarlowicz/Rails7-DragAndDrop-Docker"
                  secondLink={demoDragAndDrop}
                  firstIcon={githubIcon}
                  secondIcon={webIcon}
                  firstCaption="Check out sorce code!"
                  secondCaption="Watch the demo!"
                />
              </div>
            </div>
            <div className={`${startPageStyles.mainDescriptionAreaEndDragAndDropApp}`}></div>
          </div>

          <div id="PomodoroApp">
            <div className={`${startPageStyles.bottomSectionBackgroundRegionHub}`}>
              <ProjectTitle
                projectName= "Pomodoro clock"
                projectShortDescription= "An application for measuring working time - effective work with the pomodoro technique"
              />
              <div className="row">
                <div className={`${startPageStyles.picColumn} col-md-8`}>
                  <ProjectPicture 
                    src={pomodoroApp_final}
                    customClassName={`${startPageStyles.projectPic}`}
                  />
                </div>
                <div className={`${startPageStyles.projectIconArea} col-auto my-auto`}>
                <TechnologiesCard
                    iconsData={PomodoroAppIconsData}
                  />
                </div>
              </div>
            </div>
            <div className={`${startPageStyles.mainDescriptionArea} row`}>
              <div id="descriptionPomodoroApp" className={`${startPageStyles.descriptionSection} col-md-6`}>
                <menu  className='my-0'>
                  <TabButton onSelect={() => handleClickPomodoroApp('about')} isActive={selectedTopicPomodoroApp==="about"}>About</TabButton>
                </menu>
                <div  className={`${startPageStyles.mainDescriptionText} col-md-12 text-start`}>
                  {PROJECT_FOUR[selectedTopicPomodoroApp].description}
                </div>
              </div>
              <div className={`${startPageStyles.developmentTeamHeader} col-auto mx-auto text-center w-25 pt-5 mt-3`}>
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
            <div className={`${startPageStyles.mainDescriptionAreaEndRegionHub}`}></div>
          </div>
        </div>

        <footer className={`${startPageStyles.mainPageFooter} w-100 text-end`}>
          <div className='row justify-content-between'>
            <div className='col-6 mt-1'>
              <div className={`${startPageStyles.mainPageFooterText} px-2`}>
              ©2024 Bartosz Szarłowicz 
              </div>
            </div>
            <div className='col-6 mt-1 d-flex align-items-center'>
             <div className={`${startPageStyles.mainPageFooterText} px-2`}>
                Credits:
              </div>
              <a target="_blank" href="https://icons8.com" className={`${startPageStyles.mainPageFooterText}`}>Icons by Icons8</a>
            </div>
          </div>
        </footer>
      </div>
    );
}