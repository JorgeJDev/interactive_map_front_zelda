export const setLocal = (userLocal, token) => {

  localStorage.setItem("userLocal", JSON.stringify(userLocal));
  localStorage.setItem("token", token);

};

export const getLocal = () => {

  const userLocal = JSON.parse(localStorage.getItem("userLocal")) || null;
  const token = localStorage.getItem("token") || null;

  return { userLocal, token };

};

