import { Request } from "utils/API";

export const createUserRequest = ({ data, token }) => {
  const { name, email, password, role } = data;
  return Request({
    method: "POST",
    url: "/auth/users",
    data: { name, email, password, role },
  }, token);
};

export const allUsersRequest = ({ params, token }) => {
  const { name, role, sortBy = "desc", limit = 10, page = 1 } = params;
  return Request({
    method: "GET",
    url: "/auth/users",
    params: { name, sortBy, limit, role, page },
  }, token);
};

export const getUserByIdRequest = ({ params, token }) => {
  const { id } = params;
  return Request({
    method: "GET",
    url: "/auth/users",
    params: { id },
  }, token);
};

export const updateUserByIdRequest = ({ params, data, token }) => {
  const { id } = params;
  const { name, email, password } = data;
  return Request({
    method: "PATCH",
    url: "/auth/users",
    params: { id },
    data: { name, email, password },
  }, token);
};

export const removeUserByIdRequest = ({ params, token }) => {
  const { id } = params;
  return Request({
    method: "DELETE",
    url: "/auth/users",
    params: { id },
  }, token);
};
