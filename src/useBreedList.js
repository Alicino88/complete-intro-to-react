//example of custom hook fetching the breeds according to the animal that is selected by the user
//when we want a functionality to be re-usable across our application

import { useState, useEffect } from "react";

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    //if no animal is specified, then breedlist is an empty array
    if (!animal) {
      setBreedList([]);
      //if I have animals in my local cache, I have requested them previously, then serve that
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
      //go to the API and get the breed
    } else {
      requestBreedList();
    }
    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");
      //animal is the one selected by the user
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
