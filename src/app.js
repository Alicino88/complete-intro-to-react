// running "npm init" inside the terminal adds the package.json file. This keeps track of all the dependencies a project needs in order to run.
//normally when we run "npm install" all the dependencies listed in package.json are added to the modules folder.
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { StrictMode } from "react";
import Details from "./Details";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

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
      <Router>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Switch>
          {/*:id is a variable */}
          <Route path="/details/:id">
            <Details />
          </Route>
          {/*the hp displays the search box with the Results component containing Pet component.
          once clicking on  <Link to={`/details/${id}`}> inside Pet component the user is redirected to the Details page.
          The id is passed as a prop to the Details.js component where we use Useparams hook*/}
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
      ;
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
