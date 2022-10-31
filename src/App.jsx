import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routing";
import Error from "./pages/Error";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <Router>
      <MainNav />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<SignIn />}></Route>
        <Route element={<ProtectedRoute token={token} />}>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
        </Route>
        <Route exact path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
