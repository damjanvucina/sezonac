import React from "react";
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
  selectedOption,
  disabled,
  isSearchBar,
  isCategoryGroup
}) => {
  return (
    <div className="input-group">
      <label htmlFor={name} className="sr-only labela">
        {label}
      </label>

      <div className="input-group-prepend">
        <span
          className={classnames("input-group-text rounded-0", {
            "input-fixed-duljina labela": !isSearchBar,
            "input-fixed-duljina-sm": isSearchBar
          })}
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
        disabled={disabled}
        value={value}
        required
        autoFocus
      >
        {/*<option value="DEFAULT">{defaultOption}</option>*/}
        <option value={isCategoryGroup ? "Sve kategorije" : "DEFAULT"}>
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
  options: PropTypes.array,
  defaultOption: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  disablePrepend: PropTypes.bool,
  isSearchBar: PropTypes.bool
};

export default SelectListInputGroup;
