import React, { Component } from "react";
import { render } from "react-dom";

import Header from "../components/Header";
import Main from "../components/Main";
import Aside from "../components/Aside";

const wrapper = document.getElementById("root"); 

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Aside />
      </div>
    );
  }
}

render(<App />, wrapper);
export default App;
