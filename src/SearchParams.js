import { useState } from "react";

//in JSX "class" attribute becomes "className" and "for" attribute "htmlFor"
// 1.whenever React detects a change it re-renders, so if we click inside the input and try to type in this is not possible.
//as React is detecting the change and keeps on re-rendering the location = "Seattle, WA".
// 2.In order to be able to update the value as we type, we use UseState and on the input we add the event handler onChange={(e) => setLocation(e.target.value)}
//the location value is whatever the user types inside the input field. By adding useState we are adding a place where to store the new value and then displaying it.
//3.React is smart enough to re-render only the component whose state changes. So if we have a page with two components A,B and the state changes only for
//component A then the  component B is not re-rendered.

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  //const location = "Seattle, WA";
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, updateAnimal] = useState("");
  const [breed, updateBreed] = useState("");
  let breeds = [];
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => updateAnimal(e.target.value)}
            onBlur={(e) => updateAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => updateBreed(e.target.value)}
            onBlur={(e) => updateBreed(e.target.value)}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
