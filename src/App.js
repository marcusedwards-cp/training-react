import React from "react";
import HeroComponent from "./hero/hero.js";
import Tracks from "./tracks/tracks.js";
import {ServiceContext, StaticResourceService} from "./services/ContentService.ts";
import SearchG2ContentService from "./services/SearchG2Service.ts";
import "./styles.css";


class App extends React.Component {
  render() {
    return (
      // <ServiceContext.Provider value={new StaticResourceService("http://stagecpuk.crownpeak.com/spa-training")}>
      <ServiceContext.Provider value={new SearchG2ContentService("cpuk-training-stage")}>
        <div className="App">
          <HeroComponent />
          <Tracks/>
        </div>
      </ServiceContext.Provider>
    );
  }
}
export default App;
