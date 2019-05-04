import React, { Fragment } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextAreaInputGroup = ({
  id,
  name,
  error,
  placeholder,
  value,
  onChange,
  label,
  defaultClasses
}) => {
  return (
    <div className="input-group">
      <label htmlFor={name} className="sr-only labela">
        {label}
      </label>
      <div className="input-group-prepend">
        <span
          className="input-group-text input-fixed-duljina rounded-0  labela"
          id="basic-addon1"
        >
          {label}
        </span>
      </div>
      <textarea
        id={id}
        name={name}
        className={classnames(defaultClasses, {
          "is-invalid": error
        })}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        rows={3}
        required
        autoFocus
      />
      {error && <div className="invalid-feedback auth-warning">{error}</div>}
    </div>
  );
};

TextAreaInputGroup.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  defaultClasses: PropTypes.string.isRequired
};

export default TextAreaInputGroup;
