import React, { Component } from "react";
import ReactDOM from "react-dom";
import EventInput from "./eventInput";

class ItineraryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: true,
      eventType: "travel",
      eventID: 1,
    };
  }

  componentDidMount = () => {
    this.hideEntryForm();
  };

  hideEntryForm() {
    let x = document.getElementById("showForm");
    if (this.state.showForm) {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  handleClick = (event) => {
    event.persist();
    this.setState(
      {
        showForm: !this.state.showForm,
        eventType: event.target.name,
        eventID: this.props.getEventID(),
      },
      () => {
        ReactDOM.render(
          <EventInput
            id="eventForm"
            callback={this.onSave}
            eventType={this.state.eventType}
            headerStyle={"h3" + this.state.eventType}
            buttonStyle={"btn btn-lg btn" + this.state.eventType}
            eventID={this.state.eventID}
          />,
          document.getElementById("showForm")
        );
      }
    );
  };
  onSave = (itinerary) => {
    this.props.callback(itinerary);
    ReactDOM.unmountComponentAtNode(document.getElementById("showForm"));
  };
  render() {
    return (
      <div className="form text-center">
        <button
          className="btn btnTravel  col-sm-1  m-2 p-3 rounded-pill"
          onClick={this.handleClick}
          name="travel"
        >
          Travel
        </button>
        <button
          className="btn btnActivity col-sm-1   m-2 p-3 rounded-pill"
          onClick={this.handleClick}
          name="activity"
        >
          Activity
        </button>
        <button
          className="btn btnFood col-sm-1   m-2 p-3 rounded-pill"
          onClick={this.handleClick}
          name="food"
        >
          Food
        </button>
        <button
          className="btn btnLeisure col-sm-1   m-2 p-3 rounded-pill"
          onClick={this.handleClick}
          name="leisure"
        >
          Leisure
        </button>

        <div id="showForm"></div>
      </div>
    );
  }
}

export default ItineraryForm;
