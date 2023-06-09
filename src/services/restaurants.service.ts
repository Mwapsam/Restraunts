import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchRestaurants = createAsyncThunk("restaurants/fetch", async () => {
    try {
      const res = await axios.get('http://localhost:1337/api/restaurants');
      const data = await res.data.data;      
      return data;
    } catch (e: any) {
      console.log(e);
      
       throw new Error(e.response.data.error.message);
    }
  });
  
  export default fetchRestaurants;