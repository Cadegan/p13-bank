export const getToken = () => {
  const rememberMe = localStorage.getItem("rememberMe");
  return rememberMe
    ? localStorage.getItem("token")
    : sessionStorage.getItem("token");
};
