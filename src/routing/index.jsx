import { useSelector, useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { removeToken } from "../slices/userSlice";
import hydraLogo from "../assets/hydra.svg";

const ProtectedRoute = ({ token }) => {
  const dispatch = useDispatch();
  /* Destructuring the loading property from the state.auth object. */
  const { loading } = useSelector((state) => state.auth);

  /* Show Loading screen if state is loading,
  dashboard if token is found or unauthorized screen if is not */
  return (
    <>
      {token ? (
        <Outlet />
      ) : loading ? (
        <div>Loading...</div>
      ) : (
        <div className="unauthorized">
          <h1>Nicht autorisiert !</h1>
          <img src={hydraLogo} alt="Hail Hydra" className="hydraLogo"></img>
          <span>
            <NavLink to="/login" onClick={() => dispatch(removeToken())}>
              Login to gain access
            </NavLink>
          </span>
        </div>
      )}
    </>
  );
};

export default ProtectedRoute;
