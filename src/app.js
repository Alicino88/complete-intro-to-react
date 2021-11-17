//1. the component "Pet" receives information "props" from his parent component "App"
//Props follow the principle of one way data flow: information can be passed down from a parent to a child but not vice-versa
//2. running "npm init" inside the terminal adds the package.json file. This keeps track of all the dependencies a project needs in order to run.
//normally when we run "npm install" all the dependencies listed in package.json are added to the modules folder.
import React from "react";
import { ReactDOM } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt me"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Charlie",
      animal: "Dog",
      breed: "Poodle",
    }),
    React.createElement(Pet, {
      name: "Mia",
      animal: "Dog",
      breed: "Golden Retriever",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
