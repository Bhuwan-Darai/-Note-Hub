import { api } from "@/api";

// sign up
export const signUp = async (email: string, password: string) => {
  console.log("signUp", email, password);
  const response = await api.post("/registerUser", { email, password });
  return response.data;
};

// sign in
export const signIn = async (email: string, password: string) => {
  const response = await api.post("/auth/signin", { email, password });
  return response.data;
};

// sign out
export const signOut = async () => {
  const response = await api.post("/auth/signout");
  return response.data;
};

// verify email
export const verifyEmail = async (token: string) => {
  const response = await api.post("/auth/verify-email", { token });
  return response.data;
};

// google auth
export const googleAuth = async () => {
  const response = await api.post("/auth/google");
  return response.data;
};
