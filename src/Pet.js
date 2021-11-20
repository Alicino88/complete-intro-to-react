import { Link } from "react-router-dom";

/*
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};
*/

/*When the jsx below runs through Babel and Parcel, it outputs the code above.
 */
const Pet = (props) => {
  const { name, animal, breed, images, location, id } = props;
  //if nothin comes back fom the API we display the following pic
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  //otherwise we display the first image
  if (images.length) {
    hero = images[0];
  }

  return (
    /*each link takes to a detail page. The id is being passed as a prop to Details.js */
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
