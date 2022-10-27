import { useSelector, useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { removeToken } from "../slices/userSlice";
import hydraLogo from "../assets/hydra.svg";

const ProtectedRoute = ({ token }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  return (
    <>
      {loading && <div>Loading...</div>}
      {token ? (
        <Outlet />
      ) : (
        <div className="unauthorized">
          <h1>Nicht autorisiert !</h1>
          <img src={hydraLogo} alt="Hail Hydra" className="hydraLogo"></img>
          <span>
            <NavLink to="/login" onClick={() => dispatch(removeToken())}>
              Login
            </NavLink>{" "}
            to gain access
          </span>
        </div>
      )}
    </>
  );
};

export default ProtectedRoute;
