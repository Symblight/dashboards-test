import qs from "qs";
import axios from "axios";

const API_URL = process.env.REACT_APP_API;


const createAuthorization = (
  token
) =>
  token ? { Authorization: `bearer ${token}` } : {};


export async function Request(request, token) {
  const params = request.params ? qs.stringify(request.params) : ""
  const formattedUrl =
    API_URL + request.url + params;

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Accepts: "*/*",
    ...createAuthorization(token),
    ...request.header,
  };

  if (request.unsetContentType) {
    delete headers["Content-Type"];
  }

  const requestConfig = {
    method: request.method,
    url: formattedUrl,
    headers,
    data: {
      ...request.data,
    },
  };

  return await axios(requestConfig);
}
