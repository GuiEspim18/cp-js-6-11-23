import PropTypes from "prop-types";
import "./PasswordInput.scss";
import noeye from "../../../assets/img/visible-off.svg";
import eye from "../../../assets/img/visible.svg";
import { useState } from "react";

PasswordInput.propTypes = {
    placeholder: PropTypes.string, 
    change: PropTypes.any
}

function PasswordInput (props) {

    const [visibility, setVisibility] = useState(false);

    const handleChange = (e) => {
        e.preventDefault();
        setVisibility(!visibility);
    }

    return (
        <div className="input-holder">
            <input type={visibility ? "text" : "password"} placeholder={props.placeholder} onChange={props.change} />
            <button onClick={handleChange}>
                <img src={visibility ? eye : noeye} alt="" />
            </button>
        </div>
    )
}

export default PasswordInput;