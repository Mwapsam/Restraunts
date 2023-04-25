import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
    try {
      const res = await axios.get('http://localhost:1337/api/users');
      const data = await res.data;  
      console.log(data);
          
      return data;
    } catch (e: any) {
       throw new Error(e.response.error.message);
    }
  });
  
  export default fetchUsers;