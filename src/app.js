// running "npm init" inside the terminal adds the package.json file. This keeps track of all the dependencies a project needs in order to run.
//normally when we run "npm install" all the dependencies listed in package.json are added to the modules folder.
import { render } from "react-dom";
import SearchParams from "./SearchParams";

/*
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
*/

const App = () => {
  return (
    <div>
      <h1>Adopt me</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
