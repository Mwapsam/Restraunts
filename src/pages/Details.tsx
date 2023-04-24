import { useParams } from "react-router-dom";
import useRestuarantFetch from "../hooks/useRestuarantFetch";
import { Detail } from "../components";
import { Restaurant, Ratings } from "../types";

const Details = () => {
  const { restaurants, rating, users } = useRestuarantFetch();
  const { id } = useParams();

  const restaurant: Restaurant | undefined = restaurants && id 
    ? restaurants.find((rest) => rest.id === parseInt(id)) 
    : undefined;

    const ratings: Ratings[] | undefined = rating && id 
    ? rating.filter((rate) => rate.attributes.restaurant_id === parseInt(id)) 
    : undefined;
    
  return (
    <>
      <Detail restaurant={restaurant} rating={ratings} users={users} />
    </>
  )
}

export default Details;