import React from "react";
import classnames from "classnames";

const sessionCard = props => {
  const session = props.data;
  let tf = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit"
  });
  let classes = classnames("session", "session--" + session.type, "card");
  return (
    <div className={classes}>
      {session.img ? (
        <img className="card-img-top" src="..." alt="..." />
      ) : null}
      <div className="card-body">
        <div className="session_schedule">
          <span className="session__start">
            {tf.format(new Date(session.start))}
          </span>
          &ndash;
          <span className="session__end">
            {tf.format(new Date(session.end))}
          </span>
        </div>
        <h5 className="card-title">{session.title}</h5>
        <p className="card-text">{session.description}</p>
      </div>
    </div>
  );
};

export default sessionCard;
