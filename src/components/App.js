import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList"
import youtube from "../apis/youtube";

export class App extends Component {
  state = {videos: []}
  onTermSubmit = async (term) => {
    const KEY = "AIzaSyB_J6JPkUJDmDm8raUUpcpBqulDCib0VuU";
    const response = await youtube.get("/search", {
      params: {
        q: term,
        key: KEY,
      },
    });

    this.setState({ videos: response.data.items });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "15px" }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos}/>

      </div>
    );
  }
}

export default App;
