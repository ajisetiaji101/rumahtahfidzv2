const parseJwt = (value) => {
  try {
    const authHeader = value.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

export default parseJwt;
