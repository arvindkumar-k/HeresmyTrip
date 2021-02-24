import React, { Component } from "react";
import DropDownFormControl from "./form_dropdown";
import DateTimeFormControl from "./form_DateTime";
import LocationFormControl from "./form_location";
import TextAreaFormControl from "./form_TextArea";

const options = {
  travel: ["Car", "Flight", "Train", "Bus", "Bike", "Boat"],
  activity: ["Hiking", "Trekking", "Sight Seeing", "Temples", "Beach"],
  leisure: ["Rest", "Lights Out", "Nap", "Chilling"],
  food: ["Italian", "Spanish", "Indian", "American"],
};

class InputEvent extends Component {
  constructor(props) {
    super(props);
    this.customStyle = "container container-fluid defaultInputCardStyle";
    this.state = {
      eventTitle: "",
      typeName: props.eventType + "Type",
      eventID: props.eventID,
      eventType: props.eventType,
      startDate: "",
      endDate: "",
      startTime: "",
      fromLocation: {},
      toLocation: {},
      location: {},
      activityType: "",
      leisureType: "",
      travelType: "",
      foodType: "",
    };
  }

  setFormInput = (fieldname, inputValue) => {
    this.setState({ [fieldname]: inputValue });
  };
  componentDidUpdate = (props, state) => {};

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      eventType: nextProps.eventType,
      typeName: nextProps.eventType + "Type",
    };
  }
  saveItinerary = () => {
    this.props.callback(this.state);
  };

  updateState = (props) => {};
  render() {
    let props = this.props;
    this.updateState(props);
    return (
      <div className={"card card" + this.props.eventType}>
        <div className="row">
          <div className="col-3"></div>
          <div className={"h3 col-6  " + this.props.headerStyle}>
            {/* <h3 className={this.props.headerStyle}> */}
            {this.props.eventType.toUpperCase()} EVENT
            {/* </h3> */}
          </div>
          <div className="col-3"></div>
        </div>
        <div className="card-body">
          <table className="table table-responsive ">
            <tbody>
              <tr className="row">
                <td className="col-md-12">
                  <TextAreaFormControl
                    name="eventTitle"
                    onSave={this.setFormInput}
                    labelName="Title"
                    altText="Trekking in Alps, Travelling to Osaka..."
                  ></TextAreaFormControl>
                </td>
              </tr>
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
              {/* From Location to Location */}
              {this.props.eventType === "travel" && (
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
              )}
              {/* Event Location  */}
              {["leisure", "activity", "food"].includes(
                this.props.eventType
              ) && (
                <tr className="row">
                  <td className="col-md-12">
                    <LocationFormControl
                      labelName="Location"
                      name="location"
                      onPlaceLoaded={this.setFormInput}
                    />
                  </td>
                </tr>
              )}
              <tr className="row">
                <td className="col-md-6">
                  {/* Mode of Travel */}
                  {this.props.eventType === "travel" && (
                    <DropDownFormControl
                      name={[this.state.typeName]}
                      dataList={options[this.props.eventType]}
                      labelName="Mode of Travel"
                      dataListName="travelTypeDataList"
                      onSave={this.setFormInput}
                      // altText="Please enter your mode of Travel"
                    />
                  )}
                  {["leisure", "activity", "food"].includes(
                    this.props.eventType
                  ) && (
                    <DropDownFormControl
                      name={[this.state.typeName]}
                      dataList={options[this.props.eventType]}
                      labelName={
                        this.props.eventType.charAt(0).toUpperCase() +
                        this.props.eventType.slice(
                          1,
                          this.props.eventType.length
                        ) +
                        " Type"
                      }
                      onSave={this.setFormInput}
                      // altText="Please enter your mode of Travel"
                    />
                  )}
                </td>

                <td className="col-md-6">
                  <TextAreaFormControl
                    name="comments"
                    onSave={this.setFormInput}
                    labelName="Comments"
                  ></TextAreaFormControl>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center ">
            <button
              className={this.props.buttonStyle}
              onClick={this.saveItinerary}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default InputEvent;
