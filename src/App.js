import React from "react";
import HeroComponent from "./hero/hero.js";
import Sessions from "./sessions/sessions.js";

import "./styles.css";

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <HeroComponent />
        <Sessions/>
      </div>
    );
  }
}
export default App;
