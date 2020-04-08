import React from "react";
import {ServiceContext} from "../services/ContentService.ts";
import SessionCard from "./session-card.js";
import "./sessions.css";

class Sessions extends React.Component {
  static contextType = ServiceContext;
  render() {

    let sessions = this.props.data.map((s, i) => (
        <div className="col" key={i}>
          <SessionCard data={s} />
        </div>
      ));    
    return (
      <div className="sessions">
        <div className="row row-cols-1">{sessions}</div>
      </div>
    );
  }
}

export default Sessions;
