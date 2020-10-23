import React from 'react';
import Autosuggest from 'react-autosuggest';
import { Socket } from 'socket.io-client';

const languages = [
    {
      name: 'homeY',
      year: 1972
    },
    {
        name: 'homeX',
        year: 1972
      },
    {
      name: 'homeAll',
      year: 2012
    },
    {
        name: 'Circle',
    }

  ];

  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : languages.filter(lang =>
      lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };


  const getSuggestionValue = suggestion => suggestion.name;

  const renderSuggestion = suggestion => (
    <div>
      {suggestion.name}
    </div>
  );

  class Auto extends React.Component{
      constructor(){
          super();  
          this.state = {
              value: '', 
              suggestions: []
          }
      }
      onChange = (event, { newValue }) => {
         
        this.setState({
          value: newValue
        });
      };
        // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  sendCommand = ()=>{
      console.log(this.state)
  }
      render(){
        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
          placeholder: 'Command',
          value,
          onChange: this.onChange
        };
        return (
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              onSuggestionSelected = {this.sendCommand}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
            />
          );
      }
  }

  export default Auto;