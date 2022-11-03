import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../slices/userSlice";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";

export default function MainNav() {
  const { userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

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
        {userData ? (
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
