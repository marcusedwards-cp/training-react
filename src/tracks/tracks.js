import React from "react";
import {ServiceContext} from "../services/ContentService.ts";
import Track from "./track.js";
import './tracks.css';

class Tracks extends React.Component {
  static contextType = ServiceContext;

  state = {
    loaded: false,
    tracks: []
  };

  componentDidMount() {
    let service = this.context;
    if(service) {
      service
      .tracks()
      .then(json => {
        this.setState({ loaded: true, tracks: json });
      });
    }
  }
  render() {
    let tracks = <div>Loading...</div>;
    if (this.state.loaded) {
      tracks = this.state.tracks.map((t, i) => (<div className="col-md-6" key={t.id}><Track data={t}/></div>));
    }
    return (
      <div className="tracks container">
          <div className="row">
            {tracks}
          </div>
      </div>
    );
  }
}

export default Tracks;