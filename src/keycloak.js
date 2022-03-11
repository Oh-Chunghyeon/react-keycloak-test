import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8080/auth",
  realm: "ReactKeyCloak",
  clientId: "react-auth",
});

// const keycloak = new Keycloak({
//   url: "http://dev-keycloak.pnpt.net:8080/auth",
//   realm: "Pinpoint",
//   clientId: "test-login",
// });

export default keycloak;
