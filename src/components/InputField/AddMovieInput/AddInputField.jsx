import React from "react";
import classes from "./style.module.css";

const InputField = ({ placeholder, value, onChange }) => (
    <input
        value={ value }
        onChange={ onChange }
        placeholder={ placeholder }
        className={classes.inputField}
    />
);

export default InputField
