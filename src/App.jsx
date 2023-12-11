import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./pages/header";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="flex w-screen overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
