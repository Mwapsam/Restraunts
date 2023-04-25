import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchRestaurants from "../services/restaurants.service";
import fetchRatings from "../services/ratings.service";
import fetchUsers from "../services/users.service";
import { RootState, AppDispatch } from "../store/store";

const useRestuarantFetch = () => {
    const { restaurants, loading } = useSelector((state: RootState) => state.restuarants );
    const { rating } = useSelector((state: RootState) => state.ratings);
    const { users } = useSelector((state: RootState) => state.users);
    const dispatch = useDispatch<AppDispatch>();
  
    useEffect(() => {
      dispatch(fetchRestaurants())
    }, [dispatch, restaurants.length])

    useEffect(() => {
        dispatch(fetchRatings())
      }, [dispatch, rating.length])

      useEffect(() => {
        dispatch(fetchUsers())
      }, [dispatch])
    
  return {restaurants, loading, rating, users}
}

export default useRestuarantFetch