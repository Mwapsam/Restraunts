import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Hero, Restaurants } from "../components";
import { AppDispatch, RootState } from "../store/store";
import fetchRestaurants from '../services/restaurants.service';

const Home = () => {
  const { restaurants, loading } = useSelector((state: RootState) => state.restuarants );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [dispatch, restaurants.length])

  return (
    <>
        <Hero />
        <div className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
            <Restaurants restaurants={restaurants} loading={loading} />
        </div>
    </>
  )
}

export default Home;