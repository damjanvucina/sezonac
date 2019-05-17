import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextFieldGroup = ({
  type,
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
    <div className="form-group mb-0">
      <label htmlFor={name} className="sr-only">
        {label}
      </label>

      <input
        type={type}
        id={id}
        name={name}
        className={classnames(defaultClasses, {
          "is-invalid": error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        autoFocus
      />
      {error && <div className="invalid-feedback auth-warning">{error}</div>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  defaultClasses: PropTypes.string.isRequired
};

export default TextFieldGroup;
