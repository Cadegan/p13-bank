import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../slices/userActions";

import { useEffect, useState } from "react";

export default function SignIn() {
  const { loading, userToken, status } = useSelector(
    (state) => state.authorization
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (userToken) {
    navigate("/profile");
  }
  // useEffect(() => {
  //   if (userData) {
  //     navigate("/profile");
  //     window.location.reload();
  //   }
  // }, [navigate, userData]);

  function submiForm(e) {
    // const email = document.querySelector("#email");
    // const password = document.querySelector("#password");

    e.preventDefault();

    const loginInformations = {
      email: email,
      password: password,
    };
    dispatch(userLogin(loginInformations));
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={submiForm}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit" disabled={loading}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
