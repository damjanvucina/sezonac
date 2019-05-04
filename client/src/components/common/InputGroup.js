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
  appendix
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
        required
        autoFocus
      />
      {appendix && (
        <div className="input-group-append">
          <span className="input-group-text rounded-0" id="basic-addon2">
            {appendix}
          </span>
        </div>
      )}

      {error && <div className="invalid-feedback auth-warning">{error}</div>}
    </div>
  );
};

InputGroup.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  defaultClasses: PropTypes.string.isRequired,
  appendix: PropTypes.string
};

export default InputGroup;
