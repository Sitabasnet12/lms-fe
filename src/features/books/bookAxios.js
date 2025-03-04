import { apiProcessor } from "../../helpers/axiosHelper";
const bookEP = import.meta.env.VITE_APP_ROOT_URL + "/books";

export const fetchAllBookApi = () => {
  const apiObj = {
    method: "get",
    url: "http://localhost:9001/api/v1/books/pub-books",
    isPrivate: false,
    isRefreshToken: false,
  };
  return apiProcessor(apiObj);
};
export const postNewBookApi = (newBookObj) => {
  const apiObj = {
    method: "post",
    url: bookEP,
    isPrivate: true,
    isRefreshToken: false,
    data: newBookObj,
  };
  return apiProcessor(apiObj);
};
