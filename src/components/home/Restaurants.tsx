import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Restaurant } from '../../types';
import Spinner from "./Spinner";

type Props = {
    restaurants: Restaurant[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const Restaurants = ({restaurants, loading}: Props) => {
    
  return (
    <>
        {loading === 'pending' ? <Spinner />
        : (<Card shadow={false} style={{borderRadius: 0}} className="w-full mt-10">
            <div className="text-center pb-4">
                <h2 className="font-bold text-xl p-3">Restaurants</h2>
                <div className="border-b-2 border-gray-400 w-24 mx-auto"></div>
            </div>
            <div className="mx-auto grid  grid-cols-1 gap-6 p-6 sm:grid-cols-1 md:grid-cols-4">
                {restaurants && restaurants.map((rest) => (
                    <Link key={rest.id} to={`/details/${rest.id}`}>
                        <Card className="max-w-[24rem] overflow-hidden">
                            <CardHeader
                                floated={false}
                                shadow={false}
                                color="transparent"
                                className="m-0 rounded-none"
                            >
                                <img
                                    src={rest.attributes.image}
                                    alt={rest.attributes.name}
                                />
                            </CardHeader>
                            <CardBody className="flex justify-between">
                                <Typography color="blue-gray">
                                    {rest.attributes.name}
                                </Typography>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-6 w-3"> 
                                        <path fill="#66bb6a" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                    </svg>
                            </CardBody>
                        </Card>
                    </Link>

                ))}
            </div>
        </Card>)}
    </>
  )
}

export default Restaurants;