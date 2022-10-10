import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<SignIn />}></Route>
        {/* <Route exact path="/user/:id" element={<DashBoard />}></Route>
        <Route exact path="*" element={<Error />}></Route> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
