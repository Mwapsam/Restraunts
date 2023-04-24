import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchRestaurants from "../services/restaurants.service";
import { RootState, AppDispatch } from "../store/store";

const useRestuarantFetch = () => {
    const { restaurants, loading } = useSelector((state: RootState) => state.restuarants );
    const dispatch = useDispatch<AppDispatch>();
  
    useEffect(() => {
      dispatch(fetchRestaurants())
    }, [dispatch, restaurants.length])
    
  return {restaurants, loading}
}

export default useRestuarantFetch