import React from "react";
import Sessions from "../sessions/sessions.js";

class Track extends React.Component {
  render() {
    const t = this.props.data;
    return (
      <div className="track">
        <h3>Track: {t.title}</h3>
        <Sessions data={t.sessions}/>
      </div>
    );
  }
}

export default Track;