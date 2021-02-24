import React, { Component } from "react";

class DropDownFromControl extends Component {
  handleChange = (event) => {
    this.props.onSave(event.target.name, event.target.value);
  };
  render() {
    return (
      <React.Fragment>
        <div className="col-xs-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              name={this.props.name}
              placeholder="Train"
              list={this.props.name + "_datalist"}
              onChange={this.handleChange}
            />
            <datalist id={this.props.name + "_datalist"}>
              {this.props.dataList.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </datalist>
            <label htmlFor={this.props.name}>{this.props.labelName}</label>
            {this.props.altText && (
              <div id={this.props.name} className="form-text">
                {this.props.altText}
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DropDownFromControl;
