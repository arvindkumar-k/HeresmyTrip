import * as actions from "./actionTypes";
import * as types from "./dataTypes";

let tripID = "T1";
let eventID = "E1";

increamentID = (type) => {
  if (type === "Trip") {
    return `T${Number(tripID.replace("T", "")) + 1}`;
  } else type === "Event";
  {
    return `E${Number(eventID.replace("E", "")) + 1}`;
  }
};
export const saveEvent = (dataType, payload) => {
  if (!payload.id) {
    return {};
  } else {
  }
};
