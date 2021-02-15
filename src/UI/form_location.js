import React from "react";
/* global google */

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteInput.current,
      { types: ["geocode"] }
    );

    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  }

  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    console.log(place);
    this.props.onPlaceLoaded(this.props.name, place);
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-xs-12">
          <div className="form-floating">
            <input
              className="form-control"
              ref={this.autocompleteInput}
              id="autocompleteLocation"
              type="text"
            ></input>
            <label htmlFor="autocompleteLocation">{this.props.labelName}</label>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
