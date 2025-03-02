import axios from "axios";

const authEP = "http://localhost:9001/api/v1/auth";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};

const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};

export const apiProcessor = async ({
  method,
  url,
  data,
  isPrivate,
  isRefreshToken = false,
}) => {
  const headers = {
    Authorization: isPrivate
      ? getAccessJWT()
      : isRefreshToken
      ? getRefreshJWT()
      : null,
  };

  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
    });

    return response.data;
  } catch (error) {
    console.log(error?.message);

    // const message = error?.response?.data?.message
    //   ? error?.response?.data?.message
    //   : error.message;

    // 1. check error message for "jwt expired"
    if (error?.response?.data?.message == "jwt expired") {
      // call renew jwt token
      // get the acess token and store it in session storage

      const refreshData = await apiProcessor({
        method: "get",
        url: authEP + "/renew-jwt",
        isPrivate: false,
        isRefreshToken: true,
      });

      if (refreshData && refreshData?.status == "success") {
        // update session storage

        await sessionStorage.setItem("accessJWT", refreshData.accessToken);

        // calling again
        console.log("ORIGINAL CALL");
        // return the original call
        return await apiProcessor({
          method,
          url,
          data,
          isPrivate,
        });
      } else {
        return {
          status: "error",
          message: "Error renewing refresh token",
        };
      }
    }

    const message = error?.response?.data?.message ?? error.message;

    return {
      status: "error",
      message,
    };
  }
};
