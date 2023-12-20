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

function App() {
  const location = useLocation();
  const profile = {role:"admin",username:"yacine"}
  return (
    <div className="flex w-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Header />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/layout" element={<Layout profile={profile} title={"Home"}/>} />
          </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
