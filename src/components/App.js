import React from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
// import "./App.css";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }
  state = { images: [] };

  // onFormSubmit(inputText) {
  //   // console.log(inputText);
  //   axios
  //     .get("https://api.unsplash.com/search/photos", {
  //       params: { query: inputText },
  //       headers: {
  //         Authorization:
  //           "Client-ID CC58GwZdEhGnnK6zFzlAWOGYjsd7upLym0BtBk1zJ_w",
  //       },
  //     })
  //     .then((response) => {
  //       this.setState({ images: response.data.results });
  //       console.log(this.state.images);
  //     });
  // };

  onFormSubmit = async (inputText) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: inputText },
    });
    //after the call request
    this.setState({ images: response.data.results });
    // console.log(response.data.results);
  };

  render() {
    return (
      <div className="ui container app" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onFormSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
