import React, { Component } from "react";

class DropDownFromControl extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-sm-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              name={this.props.name}
              id={this.props.name}
              placeholder="Car"
              list={this.props.name + "_datalist"}
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
