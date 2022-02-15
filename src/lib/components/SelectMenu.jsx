import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const SelectMenu = ({
    selectName,
    idHtmlFor,
    value,
    onChange,
    selectText,
    data,
    selectClassName,
    selectStyle,
    selectSizing,
    isDisabled,
}) => {
    return (
            <select
                className={
                    'form-select ' +
                    ((selectClassName !== undefined && selectClassName) ||
                        (selectSizing !== false && selectSizing === 'large' && 'form-select-lg') ||
                        (selectSizing === 'small' && 'form-select-sm') ||
                        '')
                }
                style={selectStyle}
                name={selectName}
                id={idHtmlFor}
                value={value}
                onChange={onChange}
            >
                <option value={''} disabled={isDisabled}>
                    {selectText}
                </option>
                {typeof data[0] === 'object'
                    ? data.map((item, index) => (
                          <option key={index} value={item.optionValue}>
                              {item.optionLabel}
                          </option>
                      ))
                    : data.map((item, index) => (
                          <option key={index} value={item}>
                              {item}
                          </option>
                      ))}
            </select>
    );
};

SelectMenu.propTypes = {
    selectName: PropTypes.string.isRequired,
    idHtmlFor: PropTypes.string.isRequired,
    selectText: PropTypes.string,
    isDisabled: PropTypes.bool,
    selectSizing: PropTypes.string,
    selectStyle: PropTypes.object,
    data: PropTypes.array.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default SelectMenu;
