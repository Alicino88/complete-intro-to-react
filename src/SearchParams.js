import { useState, useEffect } from "react";
//import custom hook useBreedList below
import useBreedList from "./useBreedList";
import Pet from "./Pet";

//in JSX "class" attribute becomes "className" and "for" attribute "htmlFor"
//useState:
// 1.whenever React detects a change it re-renders, so if we click inside the input and try to type in this is not possible.
//as React is detecting the change and keeps on re-rendering the location = "Seattle, WA".
// 2.In order to be able to update the value as we type, we use UseState and on the input we add the event handler onChange={(e) => setLocation(e.target.value)}
//the location value is whatever the user types inside the input field. By adding useState we are adding a place where to store the new value and then displaying it.
//3.React is smart enough to re-render only the component whose state changes. So if we have a page with two components A,B and the state changes only for
//component A then the  component B is not re-rendered.

//useEffect:
//useEffect allows us to add side effects to our application
//there can be multiple useEffect in the same component

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, updateAnimal] = useState("");
  const [breed, updateBreed] = useState("");
  //the state pets will contain the pets we fetch from the API with equestPets()
  const [pets, setPets] = useState([]);
  //let breeds = [];
  const [breeds] = useBreedList(animal);

  //added dependency array, the function runs once after the first render
  //without the dependency array, we would fetch the pets, the state would update and useEffect would fire, causing an endless loop.
  //inside the dependency array we can specify when we want to run useEffect: for example adding [location] would make the useEffect run only when the location state has changed.
  useEffect(() => requestPets(), []);

  async function requestPets() {
    //res is an object
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    //console.log(json);
    setPets(json.pets);
  }
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          {/*The onChange event in React detects when the value of an input element changes. */}
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
      {pets.map((pet) => {
        return (
          <Pet
            name={pet.name}
            animal={pet.animal}
            bredd={pet.breed}
            key={pet.id}
          ></Pet>
        );
      })}
    </div>
  );
};

export default SearchParams;