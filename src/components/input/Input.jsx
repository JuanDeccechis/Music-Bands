import React, { Component } from "react";
import './input.css'

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: '',
      error: '',
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  handleChangeInput(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
        value: value,
    });
  }

  handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  validateInput(event) {
      const { hasError } = this.props;
    let input = event.target;
    let name = event.target.name;
    let errorMessage = null;
    switch (true) {
      case !input.value:
        errorMessage = `${name} is empty.`;
        break;
    case hasError:
        errorMessage = `Wrong ${name}.`;
        break;
      case input.minLength > -1 && input.value.length < input.minLength:
        errorMessage = `Your ${name} must contains at least ${input.minLength} characters.`;
        break;
      case input.maxLength > -1 && input.value.length > input.maxLength:
        errorMessage = `Your ${name} must contains up to ${input.maxLength} characters.`;
        break;
      default:
        errorMessage = null;
        break;
    }

    this.setState({ error: errorMessage });
  }

  render() {
    const { error } = this.state;
    const { placeholder, name, minLength, maxLength, type, className } = this.props;
    let childrenWithExtraProp = [];
    if (this.props.children) {
        childrenWithExtraProp = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                className: `${child.props.className} ${error ? "with-error error-text" : ''}`
            });
          });
    }
    return (
      <div className="input-icons">
          {this.props.children && 
        childrenWithExtraProp[0] }
        <input
          id={name}
          name={name}
          ref={name}
          className={`input-with-padding ${
            error=== null ? "valid" : error ? "error" : ""
          } ${className ? className : ''}`}
          type={type}
          placeholder={`${placeholder ? placeholder : name}*`}
          required
          minLength={minLength}
          maxLength={maxLength}
          value={this.state.value}
          onChange={this.handleChangeInput}
          onKeyPress={this.handleKeyPress}
          onBlur={this.validateInput}
        />
        {childrenWithExtraProp[1] }
        {error && (
          <span className="error-text">{error}</span>
        )}
      </div>
    );
  }
}

export default Input;
