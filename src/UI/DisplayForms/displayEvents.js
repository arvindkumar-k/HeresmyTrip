import React, { Component } from "react";
import { CloseOutlined, EllipsisOutlined } from "@ant-design/icons/";

//import * as bulmas from "bulma/css/bulma.css";
class DisplayEvent extends Component {
  constructor(props) {
    super(props);
    console.log(props.event);
  }
  render() {
    let event = this.props.event;
    return (
      <React.Fragment>
        <div className={"card w-25"}>
          <div className={"card-body" + " h3" + event.eventType}>
            <h5 className="card-title text-white">
              {event.eventTitle.toUpperCase()}
            </h5>

            {/* Event Description based on the Event Type */}
            {/* For Activity */}
            {event.eventType === "activity" && (
              <p className="card-text text-white">
                {`${event.activityType} in ${event.location.name}`}
              </p>
            )}
            {/* For Leisure */}
            {event.eventType === "leisure" && (
              <p className="card-text text-white">
                {`${event.leisureType} @ ${event.location.name}`}
              </p>
            )}
            {/* For Leisure */}
            {event.eventType === "food" && (
              <p className="card-text text-white">
                {`${event.foodType} at ${event.location.name}`}
              </p>
            )}
            {/* For Travel events  */}
            {event.eventType === "travel" && (
              <div>
                <div className="row">
                  <div className="col">
                    <h6 className="text-white">
                      {event.fromLocation.name}{" "}
                      <i className="bi bi-forward"></i> {event.toLocation.name}
                    </h6>
                  </div>
                  <div className="row">
                    <div className="col-sm-3">{event.travelType} </div>
                    <div className="col-sm-9">
                      <i className="bi bi-calendar"></i>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <a
              href="#"
              className="btn btn-xs btn-danger badge  "
              name={event.eventID}
            >
              <i className="bi bi-trash"></i>
            </a>
            <a
              href="#"
              name={event.eventID}
              className="btn btn-xs btn-info  badge "
            >
              <i className="bi bi-pencil"></i>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DisplayEvent;
