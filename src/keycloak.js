import Keycloak from "keycloak-js";

// const keycloak = new Keycloak({
//   url: "http://localhost:8080/auth",
//   realm: "ReactKeyCloak",
//   clientId: "react-auth",
// });

const keycloak = new Keycloak({
  url: "http://localhost:8080/auth",
  realm: "ppoint",
  clientId: "ppoint-auth",
});

// const keycloak = new Keycloak({
//   url: "http://dev-keycloak.pnpt.net:8080/",
//   realm: "pinpoint",
//   clientId: "ppnt-login",
// });

export default keycloak;
