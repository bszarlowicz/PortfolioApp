import StartPageStyles from "../assets/css/StartPage.module.css";
import curlyBracesImg from "../assets/images/curlyBraces.png";
import angleBracketsImg from "../assets/images/angleBrackets.png";
import hashtagImg from "../assets/images/hashtag.png";

export default function StartPage() {
  return (
      <div className={`${StartPageStyles.verticalCenter} mt-4`}>
        <div className="row">
          <div
            className={`${StartPageStyles.mainHeader} col-md-12 text-center `}
          >
            Frontend Developer
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center p-0">
            <img
              src={curlyBracesImg}
              alt="Curly Braces"
              className={`${StartPageStyles.customImg}`}
            />
          </div>
          <div className="col-md-4 text-center p-0">
            <img
              src={hashtagImg}
              alt="Curly Braces"
              className={`${StartPageStyles.customImg}`}
            />
          </div>
          <div className="col-md-4 text-center p-0">
            <img
              src={angleBracketsImg}
              alt="Curly Braces"
              className={`${StartPageStyles.customImg}`}
            />
          </div>
        </div>
      </div>
  );
}
