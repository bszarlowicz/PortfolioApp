import testCss from "../assets/css/testCss.css";

export default function TabButton({children, onSelect, isActive}){
    return (
        <li>
            <button
                onClick={onSelect}
                className={isActive ? "active-btn" : "no-active-btn" }
            >{children}</button>
        </li>
    );
}