import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";
import ProtectedRoute from "./routing/protectedRoute";
import Error from "./pages/Error/error";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<SignIn />}></Route>
        <Route element={<ProtectedRoute token={token} />}>
          <Route exact path="/profile" element={<Profile />}></Route>
        </Route>
        <Route exact path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
