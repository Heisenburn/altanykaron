import { withFormsy } from "formsy-react";
import React from "react";

class MessageField extends React.Component {
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
        <label htmlFor="message">Wiadomość</label>
        <textarea
          id="message"
          name="message"
          minLength={5}
          onChange={this.changeValue}
          value={this.props.value || ""}
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

export default withFormsy(MessageField);
