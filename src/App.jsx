import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./pages/Header";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import { UserContext, UserProvider } from "./contexts/UserContext";
import PrivateRoute from "./routes/PrivateRoute";
import { routes } from "./routes/routes";
import Error404 from "./components/Error404";
import Home from "./pages/Home";
import { useContext } from "react";
import AddArticleBtn from "./components/AddArticleBtn";

function App() {
  const location = useLocation();
  const { userProfile } = useContext(UserContext);
  return (
    <div className="flex w-screen h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="*" element={<Error404 />} />
            <Route exact path={routes.HEADER} element={<Header />} />
            <Route exact path={routes.SIGNIN} element={<SignIn />} />
            <Route exact path={routes.SIGNUP} element={<SignUp />} />
            <Route exact path="/" element={<PrivateRoute />}>
              <Route
                exact
                path={routes.HOME}
                element={
                  <Layout
                    title={"Home"}
                    buttonComponent={
                      userProfile && userProfile.role === "admin" ? (
                        <AddArticleBtn />
                      ) : null
                    }
                  >
                    {" "}
                    <Home />{" "}
                  </Layout>
                }
              />
              <Route
                exact
                path={routes.FAVORITE}
                element={<Layout title={"Favorite"} />}
              />
              <Route
                exact
                path={routes.HISTORY}
                element={<Layout title={"History"} />}
              />
              <Route
                exact
                path={routes.CATEGORIES}
                element={<Layout title={"Categories"} />}
              />
              <Route
                exact
                path={routes.MODERATORS}
                element={<Layout title={"Moderators"} />}
              />
              <Route
                exact
                path={routes.SETTINGS}
                element={<Layout title={"Settings"} />}
              />
            </Route>
          </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
