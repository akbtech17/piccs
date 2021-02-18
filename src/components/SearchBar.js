import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  //one way to solve this context problem
  // constructor(props) {
  //   super(props)
  //   this.onFormatSubmit = this.onFormatSubmit.bind(this);
  // }

  state = { inputText: "" };

  //   //this method will automatically recive and event as arg

  //this function mean const onFormatSubmit: function(e) {}, which we can avoid using arrow methods
  // onFormatSubmit(e) {
  //   e.preventDefault();
  //   console.log(this.state.inputText);
  //   console.log(e);
  // };
  // 2nd method to use arrow function
  onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.inputText);
    this.props.onSubmit(this.state.inputText);
  };
  //3rd is to use arrow callback in inline
  //onSubmit={(event)=>this.onFormSubmit()}


  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input
              type="text"
              placeholder="Search..."
              //this work is not required but we are overdoing the works
              value={this.state.inputText}
              //   when we are passing a refernce to a event
              //   handler like onChnage we dont write ()
              //   it means dont run while rendering it,
              //   but onChange method will run it in some time in future
              //   its a call back function when the values fill change...
              onChange={(e) => this.setState({ inputText: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
