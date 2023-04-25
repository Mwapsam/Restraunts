import { Card, CardHeader, CardBody, Typography, Avatar } from "@material-tailwind/react";
import {  MapPinIcon } from "@heroicons/react/24/solid";
import { Restaurant, Ratings, Users } from "../../types";
import Stars from "./Stars";

type Props = {
  restaurant: Restaurant | undefined
  rating: Ratings[] | undefined
  users: Users[]
}

const Detail = ({restaurant, rating, users}: Props) => {    
  
  return (
    <div className="mx-auto max-w-screen-xl py-2 px-4 lg:p-8 lg:py-4">
      <Card shadow={false} style={{borderRadius: 0}} className="w-full flex lg:flex-row shadow-lg p-6  mt-10">
      <CardHeader floated={false} color="blue-gray" className="max-w-[26rem] h-full">
        <img
          src={restaurant?.attributes.image}
          alt="ui/ux review check"
        />
      </CardHeader>
      <div>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
                <span>
                  {restaurant?.attributes.name}
                </span>
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <MapPinIcon className="-mt-0.5 h-5 w-5 text-green-500" />
            </Typography>
          </div>
            <div className="p-3 shadow-sm">
              <Typography color="gray">
                <span>
                  {restaurant?.attributes.address}
                </span>
              </Typography>
            </div>
        </CardBody>
      </div>
    </Card>

    <Card style={{borderRadius: 0}} className="p-0 lg:p-6">
      <div className="text-center">
        <h2 className="font-bold text-xl p-3">Reviews</h2>
        <div className="border-b-2 border-gray-400 w-24 mx-auto"></div>
      </div>
      {rating?.map((rate) => {
          const user = users.find(user => user.id === rate.attributes.user_id);
          const username = user?.username || '';
          const icon = user?.icon || '';
          return (
            <Card key={rate.id} color="transparent" shadow={false} className="w-full p-2 lg:p-6">
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
              >
                <div className="flex flex-col lg:flex-row items-end lg:items-baseline justify-between">
                  <div className="flex gap-4">
                    <Avatar src={icon} variant="circular" />
                    <Typography>
                      <p className="font-bold text-sm">{username}</p>
                      {rate.attributes.description}
                    </Typography>
                  </div>
                  <Stars rate={rate} />
                </div>
              </CardHeader>
            </Card>
          );
        })}
    </Card>
    </div>
  )
}

export default Detail