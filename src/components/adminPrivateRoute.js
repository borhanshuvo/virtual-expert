import React, { useContext } from "react";
import Signin from "../../pages/signin";
import { UserContext } from "../../pages/_app";

const WithAdminAuth = (Component) => {
  const Auth = (props) => {
    const [signedUser] = useContext(UserContext);

    if (!signedUser.result) {
      return <Signin />;
    }
    return <Component {...props} />;
  };

  if (Component.getInitialsProps) {
    Auth.getInitialsProps = Component.getInitialsProps;
  }

  return Auth;
};

export default WithAdminAuth;

WithAdminAuth.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
