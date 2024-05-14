const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const schema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(6),
});
function signJwt(username, password) {
  // Your code here
  const response = schema.safeParse({ username, password });
  if (!response.success) {
    return null;
  }
  const signature = jwt.sign({ username }, jwtPassword);
  return signature;
}

console.log(signJwt("rashidmazhar@gmail.com", "asdfgh"));
/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
  // Your code here
  const verifiedToken = jwt.verify(token, jwtPassword);

  if (verifiedToken) return true;
  else return false;
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
  // Your code here
  const decodedtoken = jwt.decode(token);
  if (decodedtoken) return true;
  else return false;
}

console.log(decodeJwt("ajklfakdsfkldas"));

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
