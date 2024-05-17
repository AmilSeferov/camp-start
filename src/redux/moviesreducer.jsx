import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: false,
  data: [],
  favorite: [],
  movieLists: [],
  listId:[]
  
};
export const fetchMovie = createAsyncThunk("fetchMovie", async () => {
  const data = await axios.get(
    "https://www.omdbapi.com/?s=Batman&apikey=3f732a21"
  );
  return data.data;
});
export const fetchSearchMovie = createAsyncThunk(
  "fetchSearchMovie",
  async (search) => {
    const data = await axios.get(
      `https://www.omdbapi.com/?s=${search}&apikey=3f732a21`
    );
    console.log(data);
    return data.data;
  }
);
export const ListSlice = createSlice({
  name: "movieList",
  initialState,

  reducers: {
    add: (state, action) => {
      state.change = true,
        state.favorite = [...state.favorite, action.payload]
      
    },
    remove:(state,action)=>{
      console.log(action.payload)
      state.favorite = state.favorite.filter(item=>item.Title!==action.payload)

    },
    addList:(state,action)=>{
      state.favorite=[]
      state.movieLists=[...state.movieLists,action.payload]
    },
    addListId:(state,action)=>{
      state.listId=[...state.listId,action.payload]
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.Search;
    });
    builder.addCase(fetchMovie.rejected, (state) => {
      state.error = true;
    });

    builder.addCase(fetchSearchMovie.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSearchMovie.fulfilled, (state, action) => {
      state.isLoading = false;

      state.data = action.payload.Search;
      console.log(action.payload.Response==='true');
      state.error=action.payload.Response==='False'
    });
    builder.addCase(fetchSearchMovie.rejected, (state) => {
      // state.error = true;
    });
  },
});
export const { add,addList,remove,addListId } = ListSlice.actions;
export default ListSlice.reducer;
