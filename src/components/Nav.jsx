import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.scss";

const Nav = () => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <h1>Loading...</h1>;
  }

  console.log(keycloak.token);
  return (
    <div>
      <div className="top-0 w-full flex flex-wrap">
        <section className="x-auto">
          <nav className="navbar">
            <h1 className="text-3xl font-bold font-heading">
              Keycloak React AUTH.
            </h1>
            <ul className="menu-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/secured">Secured Page</Link>
              </li>
            </ul>
            <div className="hidden xl:flex items-center space-x-5">
              <div className="hover:text-gray-200">
                {!keycloak.authenticated && (
                  <button
                    type="button"
                    className="button"
                    onClick={() => keycloak.login()}
                  >
                    Login
                  </button>
                )}

                {!!keycloak.authenticated && (
                  <button
                    type="button"
                    className="button"
                    onClick={() => keycloak.logout()}
                  >
                    Logout ({keycloak.tokenParsed.preferred_username})
                  </button>
                )}
              </div>
            </div>
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Nav;
