import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Header from "./pages/Header";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import { UserProvider } from "./contexts/UserContext";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const location = useLocation();
  return (
    <div className="flex w-screen overflow-hidden">
      <UserProvider>
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route exact path="/" element={<Header />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/" element={<PrivateRoute />}>
              <Route exact path="layout" element={<Layout title={"Home"} />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </UserProvider>
    </div>
  );
}

export default App;
