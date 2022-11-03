import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routing";
import Error from "./pages/Error";
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import { getUserDetails } from "../src/slices/userActions";

function App() {
  /* Destructuring the token from the state.auth object. */
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  /* Update the display if token is found or not */
  useEffect(() => {
    if (token) {
      dispatch(getUserDetails());
    }
  }, [token, dispatch]);

  return (
    <Router>
      <MainNav />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<SignIn />}></Route>
        <Route element={<ProtectedRoute token={token} />}>
          <Route exact path="/profile" element={<Dashboard />}></Route>
        </Route>
        <Route exact path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
