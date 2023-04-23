import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";
import { Restaurant } from '../../types';

type Props = {
    restaurants: Restaurant[]
}

const Restaurants = ({restaurants}: Props) => {
    console.log(restaurants);
    
  return (
    <>
        <Card className="w-full">
            <div className="mx-auto grid  grid-cols-1 gap-6 p-6 sm:grid-cols-1 md:grid-cols-4">
                {restaurants && restaurants.map((rest) => (
                    <div>Hey</div>
                ))}
            </div>
        </Card>
    </>
  )
}

export default Restaurants;