import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  StarIcon,
  HeartIcon,
  WifiIcon,
  HomeIcon,
  TvIcon,
  FireIcon,
} from "@heroicons/react/24/solid";
import { Restaurant } from "../../types";


type Props = {
  restaurant: Restaurant | undefined
}

const Detail = ({restaurant}: Props) => {

  return (
    <div className="mx-auto max-w-screen-xl py-2 px-4 lg:p-8 lg:py-4">
      <Card className="w-full flex lg:flex-row shadow-lg p-6  mt-10">
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
              Wooden House, Florida
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <StarIcon className="-mt-0.5 h-5 w-5 text-yellow-700" />
              5.0
            </Typography>
          </div>
          <Typography color="gray">
            Enter a freshly updated and thoughtfully furnished peaceful home
            surrounded by ancient trees, stone walls, and open meadows.
          </Typography>
        </CardBody>
      </div>

    </Card>
    </div>
  )
}

export default Detail