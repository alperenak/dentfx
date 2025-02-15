import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

/*** Components ***/
import Input from '../../index';

/*** Styles ***/
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './dateinput.scss';
export default function DateInput({
  label,
  placeholder,
  errorList,
  labelDescription,
  defaultValue,
  validations,
  disabled,
  size,
  onChange,
}) {
  const [startDate, setStartDate] = useState(
    defaultValue ? new Date(defaultValue) : ''
  );

  const onDateChange = (date) => {
    setStartDate(date);
    onChange(date);
  };

  const ExampleCustomInput = ({ value, onClick }) => (
    <Input
      type={'text'}
      className={'example-custom-input'}
      label={label}
      placeholder={placeholder}
      errorList={errorList}
      labelDescription={labelDescription}
      validations={validations}
      defaultValue={value || defaultValue}
      disabled={disabled}
      size={size}
      onClick={onClick}
    />
  );

  return (
    <DatePicker
      selected={startDate}
      dateFormat={'dd/MM/yyyy'}
      closeOnScroll={(e) => e.target === document}
      disabled={disabled}
      onChange={(date) => onDateChange(date)}
      customInput={<ExampleCustomInput />}
    />
  );
}

/* export default class DateInput{

    render(){
        const {
            label,
            placeholder,
            errorList,
            labelDescription,
            defaultValue,
            validations,
            disabled,
            size,
            onChange
        } = this.props;
    }
} */

DateInput.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  labelDescription: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.any,
  onClick: PropTypes.any,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  errorList: PropTypes.array,
  validations: PropTypes.object,
  externalSource: PropTypes.array,
  className: PropTypes.string,
};

DateInput.defaultProps = {
  disabled: false,
  label: '',
  name: '',
  type: 'text',
  defaultValue: '',
  placeholder: '',
  size: 'half',
  errorList: [],
  externalSource: [],
  className: '',
};
