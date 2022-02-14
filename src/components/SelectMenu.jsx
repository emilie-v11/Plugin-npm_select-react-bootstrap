import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const SelectMenu = ({
    inputName,
    ariaLabel,
    idHtmlFor,
    label,
    value,
    onChange,
    selectText,
    data,
    labelClassName,
    styleLabel,
    selectClassName,
    styleSelect,
    selectSizing,
    isDisabled,
}) => {
    return (
        <>
            <label
                className={'form-label ' + (labelClassName !== undefined && labelClassName)}
                style={styleLabel}
                htmlFor={idHtmlFor}
            >
                {label}
            </label>
            <select
                className={
                    'form-select ' +
                    ((selectClassName !== undefined && selectClassName) ||
                        (selectSizing !== false && selectSizing === 'large' && 'form-select-lg') ||
                        (selectSizing === 'small' && 'form-select-sm') ||
                        '')
                }
                style={styleSelect}
                aria-label={ariaLabel}
                name={inputName}
                id={idHtmlFor}
                value={value}
                onChange={onChange}
            >
                <option value={''} disabled={isDisabled}>
                    {selectText}
                </option>
                {/* {data.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))} */}

                {typeof data[0] === 'object'
                    ? data.map((item, index) => (
                          <option key={index} value={item.value}>
                              {item.name}
                          </option>
                      ))
                    : data.map((item, index) => (
                          <option key={index} value={item}>
                              {item}
                          </option>
                      ))}
            </select>
        </>
    );
};

SelectMenu.propTypes = {
    inputName: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired,
    idHtmlFor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired,
    selectText: PropTypes.string,
    isDisabled: PropTypes.bool,
    selectSizing: PropTypes.string,
};

export default SelectMenu;
