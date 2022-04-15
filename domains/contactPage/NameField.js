import { withFormsy } from "formsy-react";
import React from "react";

class NameField extends React.Component {
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
      ? { position: "relative", top: "5px" }
      : {};

    return (
      <div>
        <label htmlFor="name">Imię i nazwisko</label>
        <input
          onChange={this.changeValue}
          type="text"
          value={this.props.value || ""}
          id="name"
        />
        {this.props.shouldDisplayErrors ? (
          <span className="validationText" style={spanStyling}>
            {errorMessage}
          </span>
        ) : null}
      </div>
    );
  }
}

export default withFormsy(NameField);
