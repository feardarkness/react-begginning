const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

class App extends React.Component {
  handleTitleCLick() {
    alert("you clicked the title");
  }

  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        {
          onClick: this.handleTitleCLick
        },
        "Adopt me now!"
      ),
      React.createElement(Pet, {
        name: "peluche",
        animal: "dog",
        breed: "chapi"
      }),
      React.createElement(Pet, {
        name: "coso",
        animal: "cat",
        breed: "normal"
      }),
      React.createElement(Pet, {
        name: "piolin",
        animal: "bird",
        breed: "asd"
      })
    ]);
  }
}

//   Both are he same
//   ReactDOM.render(React.createElement(App, {}, null), document.getElementById('root'));
ReactDOM.render(React.createElement(App), document.getElementById("root"));
