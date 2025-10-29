/* eslint-disable @typescript-eslint/no-explicit-any */

import { setUserInfo } from "../Store/user-slice";
import { apiCaller } from "./apiCall";
const refreshToken = async (dispatch: any): Promise<boolean> => {
  console.log("called");
  const token = window.localStorage.getItem("refresh");
  console.log("token",token,typeof token);

  if (token && token.length > 0) {
    const cleanToken = token
      .replace(/^"/, "")
      .replace(/"$/, "")
      .replace(/^Bearer\s+/i, "");
    const auth = "Bearer " + cleanToken;
    console.log({ auth }, "auth",auth);

    try {
      const res: any = await apiCaller(
        "/api/v1/auth/refresh",
        "POST",
        {},
        {
          Authorization: auth,
        }
      );

      if (res.success) {
        console.log(res.data);
        window.localStorage.setItem("refresh", res.data.refresh_token);
        window.localStorage.setItem("auth", res.data.access_token);
        window.localStorage.setItem("userInfo", JSON.stringify(res.data.user)); // <-- Best practice: stringify objects

        dispatch(
          setUserInfo({
            ...res.data.user,
            access_token: res.data.access_token,
            refresh_token: res.data.refresh_token,
          })
        );
        return true; // <-- Return true on success
      } else {
        // Clear tokens if refresh fails
        // window.localStorage.removeItem("refresh");
        // window.localStorage.removeItem("auth");
        // window.localStorage.removeItem("userInfo");
        return false; // <-- Return false on failure
      }
    } catch (err) {
      console.log({ err });
      // Clear tokens on error
      // window.localStorage.removeItem("refresh");
      // window.localStorage.removeItem("auth");
      // window.localStorage.removeItem("userInfo");
      return false; // <-- Return false on error
    }
  }

  // If there was no token to begin with
  return false;
};

export default refreshToken;