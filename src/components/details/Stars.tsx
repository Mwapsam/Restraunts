import { StarIcon } from "@heroicons/react/24/solid";
import { Ratings } from "../../types";

type Props = {
    rate: Ratings
}

const Stars = ({rate}: Props) => {
    const getStarIcons = (rating: string): JSX.Element[] => {
        const parsedRating = parseInt(rating);
        const starIcons = Array(5).fill(
            <StarIcon className="h-5 w-5 text-gray-400" />
        );
        starIcons.fill(
            <StarIcon className="h-5 w-5 text-yellow-700" />,
            0,
            parsedRating
        );
        return starIcons;
    };

  return (
    <div className="flex items-center gap-0">
        {getStarIcons(rate.attributes.rating)}
    </div>
  )
}

export default Stars