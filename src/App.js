import React from "react";
import HeroComponent from "./hero/hero.js";
import Tracks from "./tracks/tracks.js";
import {ServiceContext, ResourceContentService} from "./services/ContentService.ts";

import "./styles.css";

const service = new ResourceContentService("http://stagecpuk.crownpeak.com/spa-training");

class App extends React.Component {
  render() {
    return (
      <ServiceContext.Provider value={service}>
        <div className="App">
          <HeroComponent />
          <Tracks/>
        </div>
      </ServiceContext.Provider>
    );
  }
}
export default App;
