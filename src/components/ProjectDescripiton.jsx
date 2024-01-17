import StartPageStyles from "../assets/css/StartPage.module.css";
import React, { useState } from 'react';

export default function ProjectDescription({ header, content }) {

    const [descriptionSection, setDescriptionSection] = useState(0);

    return (
        <div>
            <div className="row">
                {header}
            </div>
            <div className="row">
                <div className={`${StartPageStyles.mainDescriptionText} col-md-12 text-start`}>
                    <p>{content}</p>
                </div>
            </div>
        </div>
      );
}