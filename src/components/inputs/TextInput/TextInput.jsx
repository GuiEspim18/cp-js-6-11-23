import "./TextInput.scss";
import PropTypes from "prop-types"

TextInput.propTypes = {
    placeholder: PropTypes.string,
    change: PropTypes.any
}

function TextInput(props) {
    return (
        <input type="text" className="input" placeholder={props.placeholder} onChange={props.change} />
    );
}

export default TextInput;