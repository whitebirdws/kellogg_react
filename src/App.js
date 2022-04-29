import Home from "./Home";
import ResponsiveMenu from "./MainPage/Header/ResponsiveMenu/ResponsiveMenu";
import React from "react";

class App extends React.Component {
  onCilckView = () => {
    return (
      <>
        <ResponsiveMenu></ResponsiveMenu>
      </>
    );
  };
  render() {
    return (
      <div className="App">
        <Home onCilckView={this.onCilckView} />
      </div>
    );
  }
}

export default App;
