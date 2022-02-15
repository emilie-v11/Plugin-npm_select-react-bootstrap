import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Select = ({
    name,
    id,
    selectText,
    value,
    onChange,
    data,
    className,
    style,
    sizing,
    isDisabled,
}) => {
    return (
        <select
            className={
                'form-select ' +
                ((className !== undefined && className) ||
                    (sizing !== false && sizing === 'large' && 'form-select-lg') ||
                    (sizing === 'small' && 'form-select-sm') ||
                    '')
            }
            style={style}
            name={name}
            id={id}
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

Select.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    selectText: PropTypes.string,
    className: PropTypes.string,
    sizing: PropTypes.string,
    style: PropTypes.object,
    isDisabled: PropTypes.bool,

    data: PropTypes.array.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default Select;
