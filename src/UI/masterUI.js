import React, { Component } from "react";
import DisplayEvent from "./DisplayForms/displayEvents";
import ItineraryForm from "./ItineraryForm";

const event = {
  name: "New travel",
  type: "travel",
  fromLocation: "Chennai",
  toLocation: "Goa",
  travelType: "Train",
};
class MasterUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      eventID: 0,
    };
  }
  getEventId = () => {
    this.setState({ eventID: this.state.eventID + 1 }, () => {
      return this.state.eventID;
    });
  };
  saveItinerary = (itinerary) => {
    let events = this.state.events;
    events.push(itinerary);
    this.setState({ events });
  };
  render() {
    return (
      <div className="container container-fluid">
        <ItineraryForm
          callback={this.saveItinerary}
          getEventID={this.getEventId}
        />

        <br />
        <h4>Trip Events Saved</h4>
        {this.state.events.map((event) => (
          <div key={event.eventID}>
            <DisplayEvent event={event} />
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default MasterUI;
