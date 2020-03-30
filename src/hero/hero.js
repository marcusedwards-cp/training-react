import React from "react";
import {ServiceContext} from "../services/ContentService.ts";
import ReactDOM, { render } from "react-dom";

export class HeroComponent extends React.Component {
  static contextType = ServiceContext;
  state = {
    loaded: false,
    alert: {}
  };
  componentDidMount() {
    let service = this.context;
    service
    .alert()
    .then(json => {
      this.setState({
        loaded: true,
        alert : json
      });
    });
  }
  render() {
    if (this.state.loaded) {
      return (
        <div className="container-fluid">
          <div className="jumbotron">
            <h2>{this.state.alert.title}</h2>
            <p>{this.state.alert.body}</p>
            {this.state.alert.cta_url ? (
              <p>
                <a
                  className="btn btn-primary btn-large"
                  href={this.state.alert.cta_url}
                >
                  {this.state.alert.cta_text}
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