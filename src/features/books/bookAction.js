import { setBooks } from "./bookSlice";
import { fetchAllBookApi } from "./bookAxios";

export const getAllBookAction = () => async (dispatch) => {
  const response = await fetchAllBookApi();

  // api call for user detail
  dispatch(setBooks(response.books));
};
