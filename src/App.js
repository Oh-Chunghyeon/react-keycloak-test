import { ReactKeycloakProvider } from "@react-keycloak/web";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import PrivateRoute from "./helpers/PrivateRoute";
import keycloak from "./keycloak";
import Home from "./pages/Home";
import Secured from "./pages/Secured";

function App() {
  return (
    <div className="App">
      <ReactKeycloakProvider authClient={keycloak}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/secured"
            element={
              <PrivateRoute>
                <Secured />
              </PrivateRoute>
            }
          />
        </Routes>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
