import { useParams } from "react-router-dom";

const Details = () => {
  /*The useParams hook is how you get params from React Router. */
  const { id } = useParams();
  return <h2>{id}</h2>;
};

export default Details;
