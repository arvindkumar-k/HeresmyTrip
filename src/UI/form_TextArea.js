import React, { Component } from "react";

class TextAreaFormControl extends Component {
  state = {};

  handleChange = (event) => {
    this.props.onSave(event.target.name, event.target.value);
  };
  render() {
    return (
      <div className="col-xs-12">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            name={this.props.name}
            placeholder={this.props.labelName}
            onChange={this.handleChange}
          />

          <label htmlFor={this.props.name}>{this.props.labelName}</label>
          {this.props.altText && (
            <div id={this.props.name + "_altText"} className="form-text">
              {this.props.altText}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default TextAreaFormControl;
