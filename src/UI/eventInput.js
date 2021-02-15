import React, { Component } from "react";
import DropDownFormControl from "./form_dropdown";
import DateTimeFormControl from "./form_DateTime";
import LocationFormControl from "./form_location";
class InputEvent extends Component {
  state = {
    travelOptions: ["Car", "Flight", "Train", "Bus", "Bike", "Boat"],
    startDate: "",
    endDate: "",
    startTime: "",
    fromLocation: {},
    toLocation: {},
  };
  setFormInput = (fieldname, inputValue) => {
    this.setState({ [fieldname]: inputValue });
  };

  render() {
    return (
      <div className="container container-fluid">
        <table className="table table-responsive">
          <tr className="row">
            <td className="col-md-6">
              {/* From DateTime  */}
              <DateTimeFormControl
                name="startDate"
                timeField="startTime"
                includeTime={true}
                onSave={this.setFormInput}
                labelName="Start Date"
              ></DateTimeFormControl>
            </td>
            <td className="col-md-6">
              {/* To DateTime  */}
              <DateTimeFormControl
                name="endDate"
                includeTime={true}
                timeField="endTime"
                onSave={this.setFormInput}
                labelName="End Date"
                // altText="Enter the end date"
              ></DateTimeFormControl>
            </td>
          </tr>
          <tr className="row">
            <td className="col-md-6">
              <LocationFormControl
                labelName="To Location"
                name="toLocation"
                onPlaceLoaded={this.setFormInput}
              />
            </td>

            <td className="col-md-6">
              <LocationFormControl
                labelName="From Location"
                name="fromLocation"
                onPlaceLoaded={this.setFormInput}
              />
            </td>
          </tr>
          <tr className="row">
            <td className="col-md-6">
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
            </td>
          </tr>
          <tr className="row">
            <td className="col-md-6"></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default InputEvent;
