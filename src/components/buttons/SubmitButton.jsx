import PropTypes from "prop-types";
import "./SubmitButton.scss";

SubmitButton.propTypes = {
    text: PropTypes.string
}

function SubmitButton (props) {
    return (
        <button className="submit-button">
            <p>{props.text}</p>
        </button>
    )
}

export default SubmitButton;