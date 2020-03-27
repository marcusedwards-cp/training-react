import React from "react";

import ReactDOM, { render } from "react-dom";

export class HeroComponent extends React.Component {
  state = {
    loaded: false,
    data: {}
  };
  componentDidMount() {
    this.setState({
      loaded: true,
      data : {
        "title": "Announcement",
        "body": "Early bird tickets will only be available until 21 March 2020.",
        "cta_url": "#",
        "cta_text": "Learn more"
      }
    })
  }
  render() {
    if (this.state.loaded) {
      return (
        <div className="container-fluid">
          <div className="jumbotron">
            <h2>{this.state.data.title}</h2>
            <p>{this.state.data.body}</p>
            {this.state.data.cta_url ? (
              <p>
                <a
                  className="btn btn-primary btn-large"
                  href={this.state.data.cta_url}
                >
                  {this.state.data.cta_text}
                </a>
              </p>
            ) : null}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default HeroComponent;