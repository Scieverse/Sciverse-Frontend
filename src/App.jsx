import {
  Route,
  Routes,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import Header from "./pages/Header";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import { UserProvider } from "./contexts/UserContext";

function App() {
  const location = useLocation();
  return (
    <div className="flex w-screen overflow-hidden">
      <UserProvider>
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Header />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/layout"
              element={<Layout title={"Home"} />}
            />
          </Routes>
        </AnimatePresence>
      </UserProvider>
    </div>
  );
}

export default App;
