import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import "../styles/secured.scss";

const Secured = () => {
  const { keycloak, initialized } = useKeycloak();

  console.log(keycloak);

  return (
    <div className="secured-container">
      {!initialized ? (
        <>
          <h1>로그인 정보가 있으면 확인가능합니다.</h1>;
        </>
      ) : (
        <>
          <h1 className="text-black text-4xl">
            Welcome to the Protected Page.
          </h1>

          <div className="sub-title">
            <h2>User Infomation</h2>
          </div>

          <ul className="user-info">
            <li>
              <span>user name : {keycloak.tokenParsed.name}</span>
            </li>
            <li>
              <span>user email : {keycloak.tokenParsed.email}</span>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Secured;
