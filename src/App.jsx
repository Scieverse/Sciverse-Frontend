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
import Moderateurs from "./pages/Moderateurs";
import EditModerateur from "./pages/EditModerateur";
import EditPassword from "./pages/EditPassword";
import Profile from "./pages/Profile"
import Article from "./pages/Article";
import { ArticleProvider } from "./contexts/ArticleContext";
import AddModerator from "./pages/AddModerator";
import AddModeratorBtn from "./components/AddModeratorBtn";
import EditArticleBtn from "./components/EditArticleBtn";
import EditArticle from "./pages/EditArticle";

function App() {
  const location = useLocation();
  const { userProfile } = useContext(UserContext);
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <ArticleProvider>
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
                    userProfile && userProfile.nature === "admin" ? (
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
              path={routes.SETTINGS}
              element={<Layout title={"Settings"} >
                <Profile />
              </Layout>}
            />
            <Route
              exact
              path={routes.MODERATORS}
              element={
                <Layout title={"Moderators"}                   
                buttonComponent={
                  userProfile && userProfile.nature === "admin" ? (
                    <AddModeratorBtn />
                  ) : null}
                >
                  <Moderateurs />
                </Layout>
              }
            />
            <Route
              exact
              path={routes.MODERATOREDIT}
              element={<Layout title={"Moderators"} >
                < EditModerateur />
              </Layout>}
            />
            <Route
              exact
              path={routes.ADDMODERATOR}
              element={
                <Layout
                  title={"Settings"}>
                < AddModerator />
              </Layout>}
            />
            <Route
              exact
              path={routes.PASSWORDEDIT}
              element={<Layout title={"Home"} >
                < EditPassword />
              </Layout>}
            />
            <Route
              exact
              path={routes.EDITARTICLE}
              element={<Layout title={"Home"} >
                < EditArticle/>
              </Layout>}
            />
            <Route
              exact
              path={routes.ARTICLE}
              element={
              <Layout title={"Home"}
              buttonComponent={
                userProfile && (userProfile.nature === "admin" || userProfile.nature === "Moderateur") ? (
                  <EditArticleBtn />
                ) : null}>
                < Article />
              </Layout>}
            />
          </Route>
        </Routes>
      </AnimatePresence>
      </ArticleProvider>
    </div>
  );
}

export default App;
