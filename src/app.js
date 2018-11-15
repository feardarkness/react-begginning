import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleCLick() {
    alert("you clicked the title");
  }

  render() {
    return (
      <div>
        <h1>Adopt me Now!!!</h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Pepper" animal="bird" breed="Cockatiel" />
        <Pet name="Doink" animal="cat" breed="Mixed" />
      </div>
    );
  }
}

//   Both are he same
//   render(React.createElement(App, {}, null), document.getElementById('root'));
render(<App />, document.getElementById("root"));
