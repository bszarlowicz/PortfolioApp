import StartPageStyles from "../assets/css/startPage.module.css";

export default function ContactLine({ icon: IconComponent, text }) {
    return (
        <li className={`${StartPageStyles.contacts}`}><b><IconComponent className={`${StartPageStyles.contactIcon}`} /></b><span><i>{text}</i></span></li>
      );
}