import React, { Fragment } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const InputGroup = ({
  type,
  id,
  name,
  error,
  placeholder,
  value,
  onChange,
  label,
  defaultClasses,
  append,
  isInputGroup = true,
  isTextArea = false
}) => {
  return (
    <div className={isInputGroup ? "input-group" : "form-group mb-0"}>
      <label htmlFor={name} className="sr-only labela">
        {label}
      </label>

      {isInputGroup === true ? (
        <div className="input-group-prepend">
          <span
            className="input-group-text input-fixed-duljina rounded-0  labela"
            id="basic-addon1"
          >
            {label}
          </span>
        </div>
      ) : null}

      {!isTextArea ? (
        <input
          type={type}
          id={id}
          name={name}
          className={classnames(defaultClasses, {
            "is-invalid": error
          })}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      ) : (
        <textarea
          name={name}
          id={id}
          className={classnames("form-control form-control-lg", {
            "is-invalid": error
          })}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          rows={3}
          required
          autoFocus
        />
      )}

      {append && (
        <div className="input-group-append">
          <span className="input-group-text rounded-0" id="basic-addon2">
            {append}
          </span>
        </div>
      )}

      {error && <div className="invalid-feedback auth-warning">{error}</div>}
    </div>
  );
};

InputGroup.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  defaultClasses: PropTypes.string.isRequired,
  append: PropTypes.string,
  isInputGroup: PropTypes.bool,
  isTextArea: PropTypes.bool
};

export default InputGroup;
