import { useParams } from "react-router-dom";
import useRestuarantFetch from "../hooks/useRestuarantFetch";
import { Detail } from "../components";
import { Restaurant } from "../types";

const Details = () => {
  const { restaurants } = useRestuarantFetch();
  const { id } = useParams();

  const restaurant: Restaurant | undefined = restaurants && id 
    ? restaurants.find((rest) => rest.id === parseInt(id)) 
    : undefined;
    
  return (
    <>
      <Detail restaurant={restaurant} />
    </>
  )
}

export default Details;