import { Request } from "utils/API";

export const registerRequest = async ({ data }) => {
  const { name, email, password } = data;
  return await Request({
    method: "POST",
    url: "/auth/register",
    data: { name, email, password },
  });
};

export const loginRequest = async ({ data }) => {
  const { email, password } = data;
  return await Request({
    method: "POST",
    url: "/auth/login",
    data: { email, password },
  });
};

export const logoutRequest = async () => {
  return await Request(
    {
      method: "POST",
      url: "/auth/logout",
      data: { refreshToken: localStorage.getItem("refreshToken") },
    },
    localStorage.getItem("refreshToken")
  );
};

export const refreshTokensRequest = async ({ data, token }) => {
  const { refreshToken } = data;

  return await Request(
    {
      method: "POST",
      url: "/auth/refresh-tokens",
      data: { refreshToken },
    },
    localStorage.getItem("refreshToken")
  );
};

export const forgotPasswordRequest = async ({ data, token }) => {
  const { email } = data;
  return await Request(
    {
      method: "POST",
      url: "/auth/forgot-password",
      data: { email },
    },
    localStorage.getItem("refreshToken")
  );
};

export const resetPasswordRequest = async ({ data }) => {
  const { password } = data;
  return await Request(
    {
      method: "POST",
      url: "/auth/reset-password",
      params: { token: localStorage.getItem("token") },
      data: { password },
    },
    localStorage.getItem("refreshToken")
  );
};

export const sendVerificationRequest = async ({ token }) =>
  Request(
    {
      method: "POST",
      url: "/auth/send-verification-email",
    },
    localStorage.getItem("refreshToken")
  );

export const verifyEmailRequest = async ({ params, token }) => {
  return await Request(
    {
      method: "POST",
      params: { token: params.token },
      url: "/auth/verify-email",
    },
    localStorage.getItem("refreshToken")
  );
};
