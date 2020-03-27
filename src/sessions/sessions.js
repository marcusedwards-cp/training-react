import React from "react";
import SessionCard from "./session-card.js";
import "./sessions.css";

class Sessions extends React.Component {
  state = {
    loaded: false,
    sessions: []
  };

  componentDidMount() {
    fetch("./sessions.json")
      .then(res => res.json())
      .then(json => {
        this.setState({ loaded: true, sessions: json });
      });
  }
  render() {
    let sessions = <div>Loading...</div>;
    if (this.state.loaded) {
      sessions = this.state.sessions.map((s, i) => (
        <div className="col" key={i}>
          <SessionCard data={s} />
        </div>
      ));
    }
    return (
      <div className="sessions container">
        <div className="row row-cols-1">{sessions}</div>
      </div>
    );
  }
}

export default Sessions;
