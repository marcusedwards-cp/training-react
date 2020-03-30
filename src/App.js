import React from "react";
import HeroComponent from "./hero/hero.js";
import Sessions from "./sessions/sessions.js";
import {ServiceContext, ResourceContentService} from "./services/ContentService.ts";

import "./styles.css";

const service = new ResourceContentService("");

class App extends React.Component {
  render() {
    return (
      <ServiceContext.Provider value={service}>
        <div className="App">
          <HeroComponent />
          <Sessions/>
        </div>
      </ServiceContext.Provider>
    );
  }
}
export default App;
