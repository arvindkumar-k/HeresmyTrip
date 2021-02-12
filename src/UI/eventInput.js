import React, { Component } from "react";
import DropDownFormControl from "./form_dropdown";
import DateTimeFormControl from "./form_DateTime";
class InputEvent extends Component {
  state = {
    travelOptions: ["Car", "Flight", "Train", "Bus", "Bike", "Boat"],
    startDate: "",
    endDate: "",
    startTime: "",
  };
  setFormInput = (fieldname, inputValue) => {
    this.setState({ [fieldname]: inputValue });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="table table-sm ">
          <div className="row">
            {/* From DateTime  */}
            <DateTimeFormControl
              name="startDate"
              timeField="startTime"
              includeTime={true}
              onSave={this.setFormInput}
              labelName="Start Date"
            ></DateTimeFormControl>
            {/* To DateTime  */}
            <DateTimeFormControl
              name="endDate"
              includeTime={true}
              timeField="endTime"
              onSave={this.setFormInput}
              labelName="End Date"
              // altText="Enter the end date"
            ></DateTimeFormControl>
          </div>
          <div className="row">
            {/* Mode of Travel */}
            {this.props.eventType === "travel" && (
              <DropDownFormControl
                name="travelType"
                dataList={this.state.travelOptions}
                labelName="Mode of Travel"
                dataListName="travelTypeDataList"
                // altText="Please enter your mode of Travel"
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default InputEvent;