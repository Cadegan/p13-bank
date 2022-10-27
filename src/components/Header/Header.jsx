// import React from "react";
// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getUserDetails } from "../../slices/userActions";
import { removeToken } from "../../slices/userSlice";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";

export default function Header() {
  const { token, userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (token) {
  //     dispatch(getUserDetails());
  //   }
  // }, [token, dispatch]);

  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {token ? (
          <>
            <NavLink className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {userData.firstName}
            </NavLink>
            <Link
              className="main-nav-item"
              to="/"
              onClick={() => dispatch(removeToken())}
            >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          <NavLink
            className="main-nav-item"
            to="/login"
            onClick={() => dispatch(removeToken())}
          >
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}
