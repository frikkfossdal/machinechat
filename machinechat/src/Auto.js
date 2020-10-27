import React from "react";
import Autosuggest from "react-autosuggest";

const languages = [
  {
    name: "homeY",
    params: {},
  },
  {
    name: "homeX",
  },
  {
    name: "homeAll",
  },
  {
    name: "showBoundry",
  },
  {
    name: "loop",
  },
  {
    name: "GoTo()",
  },
  {
    name: "Circle(x,y)",
  },
  {
    name: "polyline",
  },
];

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : languages.filter(
        (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const getSuggestionValue = (suggestion) => suggestion.name;

const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

class Auto extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      suggestions: [],
    };
  }
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };
  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onKeyPressed(e) {
    if (e.key == "Enter") {
      this.setState({
        value: "",
      });
    }
  }

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };
  sendCommand = () => {
    console.log(this.state);
  };
  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "Command",
      value,
      onChange: this.onChange,
    };
    return (
      <div onKeyDown={(e) => this.onKeyPressed(e)}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={this.props.ok}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    );
  }
}

export default Auto;
