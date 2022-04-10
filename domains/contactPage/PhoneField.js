import { withFormsy } from "formsy-react";
import React from "react";

class PhoneField extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    // An error message is passed only if the component is invalid
    const errorMessage = this.props.errorMessage;

    const shouldSpanChangePosition = this.props.shouldDisplayErrors === true;

    const spanStyling = shouldSpanChangePosition
      ? { position: "relative", top: "10px" }
      : {};

    return (
      <div>
        <label htmlFor="phoneNumber">Numer telefonu</label>
        <input
          onChange={this.changeValue}
          type="phone"
          value={this.props.value || ""}
          id="phoneNumber"
        />
        {this.props.shouldDisplayErrors ? (
          <span style={spanStyling}>{errorMessage}</span>
        ) : null}
      </div>
    );
  }
}

export default withFormsy(PhoneField);
