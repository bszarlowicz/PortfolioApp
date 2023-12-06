import React from "react";
import StartPageStyles from "../assets/css/StartPage.module.css";
import curlyBracesImg from "../assets/images/curlyBraces.png";
import angleBracketsImg from "../assets/images/angleBrackets.png";
import hashtagImg from "../assets/images/hashtag.png";
import { Link } from "react-scroll";
import { ChevronCompactDown } from "react-bootstrap-icons";
import Stamps3D from "../components/Stamps3D";

export default function StartPage() {
  return (
      <div>
        <div className={`${StartPageStyles.verticalCenter}`}>
          <div className="row">
            <div
              className={`${StartPageStyles.mainHeader} col-md-12 text-center`}
            >
              Frontend Developer
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
