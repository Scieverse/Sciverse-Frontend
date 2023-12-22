import { useContext } from "react";
import { Route, redirect } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : redirect("/")
      }
    />
  );
};

export default PrivateRoute;
