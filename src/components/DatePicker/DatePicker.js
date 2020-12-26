import React, { Component } from 'react'
import "./datepicker.scss"

import "react-datetime/css/react-datetime.css";
import Datetime from 'react-datetime';

export default class DatePicker extends Component {
    render() {
        return <Datetime 
        timeFormat= {false}
        {...this.props}         
        />;
    }
}

