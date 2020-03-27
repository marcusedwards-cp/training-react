import React from "react";
import classnames from "classnames";

const sessionCard = props => {
  let tf = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit"
  });
  let classes = classnames("session", "session--" + props.data.type, "card");
  return (
    <div className={classes} s>
      {props.data.img ? (
        <img className="card-img-top" src="..." alt="..." />
      ) : null}
      <div className="card-body">
        <div className="session_schedule">
          <span className="session__start">
            {tf.format(new Date(props.data.start))}
          </span>
          &ndash;
          <span className="session__end">
            {tf.format(new Date(props.data.end))}
          </span>
        </div>
        <h5 className="card-title">{props.data.title}</h5>
        <p className="card-text">{props.data.description}</p>
      </div>
    </div>
  );
};

export default sessionCard;
