import React, { Fragment } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SelectListInputGroup = ({
  id,
  name,
  error,
  placeholder,
  value,
  onChange,
  label,
  defaultClasses,
  options,
  defaultOption,
  disabled
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
      <select
        id={id}
        name={name}
        className={classnames(defaultClasses, {
          "is-invalid": error
        })}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
        required
        autoFocus
      >
        <option value="DEFAULT" disabled>
          {defaultOption}
        </option>
        {options
          ? options.map(optionItem => (
              <option key={optionItem}>{optionItem}</option>
            ))
          : null}
        )}
      </select>
      {error && <div className="invalid-feedback auth-warning">{error}</div>}
    </div>
  );
};

SelectListInputGroup.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  defaultClasses: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  defaultOption: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export default SelectListInputGroup;
