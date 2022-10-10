import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/header";

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
   <Router>
    <Header />
      <Routes>
        {/* <Route exact path="/" element={<Home />}></Route> */}
        {/* <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/user/:id" element={<DashBoard />}></Route>
        <Route exact path="*" element={<Error />}></Route> */}
    </Routes>
   </Router>
  );
}

export default App;
