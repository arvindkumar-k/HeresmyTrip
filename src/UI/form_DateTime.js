import React, { Component } from "react";
import moment from "moment";

import { DatePicker, TimePicker } from "antd";
import "antd/dist/antd.css";
const format = "HH:mm";

class DropDownFromControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDay: undefined,
      selectedTime: undefined,
    };
  }
  onChangeDate = (date, dateString) => {
    this.setState({ selectedDay: date });
    this.props.onSave(this.props.name, date._d);
  };
  onChangeTime = (time, timeString) => {
    this.setState({ selectedTime: timeString });
    this.props.onSave(this.props.timeField, timeString);
  };

  render() {
    return (
      <div>
        <td className="col-md-3">
          <label htmlFor={this.props.name}>{this.props.labelName}</label>
        </td>
        <td className="col-md-4">
          <DatePicker
            onChange={this.onChangeDate}
            placeholder={this.props.label}
          />
        </td>
        <td className="col-md-4">
          {this.props.includeTime && (
            <TimePicker
              onChange={this.onChangeTime}
              defaultValue={moment("00:00", format)}
              format={format}
            />
          )}

          {/* {this.props.altText && (
            <div id={this.props.name + "_altText"} className="form-text">
              {this.props.altText}
            </div>
          )} */}
        </td>
      </div>
    );
  }
}

export default DropDownFromControl;
