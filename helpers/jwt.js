// const expressJwt = require("express-jwt");

// function jwt() {
//   const secret = process.env.secret;
//   // const api = process.env.API_URL;
//   return expressJwt({
//     secret,
//     algorithms: ["HS256"],
//     // isRevoked: isRevoked,
//   }).unless({
//     path: [
//       { url: /\/api\/v1\/products(.*)/, methods: ["GET", "OPTIONS"] },
//       { url: /\/api\/v1\/categories(.*)/, methods: ["GET", "OPTIONS"] },
//       `${api}/users/login`,
//       `${api}/users/register`,
//     ],
//   });
// }

const expressJwt = require("express-jwt");

module.exports = jwt;

function jwt() {
  const secret = "test";
  return expressJwt({ secret, algorithms: ["HS256"], isRevoked });
  // .unless({
  // path: [
  //   // public routes that don't require authentication
  //   "/users/authenticate",
  //   "/users/register",
  // ],
  // });
}
