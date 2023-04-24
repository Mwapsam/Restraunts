import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchRatings = createAsyncThunk("ratings/fetch", async () => {
    try {
      const res = await axios.get('http://localhost:1337/api/ratings');
      const data = await res.data.data;      
      return data;
    } catch (e: any) {
       throw new Error(e.response.error.message);
    }
  });
  
  export default fetchRatings;