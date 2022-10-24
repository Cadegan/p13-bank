import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../slices/userActions";
import { useEffect } from "react";
import ErrorMessage from "../../components/Error/loginError";

export default function SignIn() {
  const { loading, userData, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      navigate("/profile");
    }
  }, [navigate, userData]);
  console.log(userData);

  const submiForm = (data) => {
    dispatch(userLogin(data));
  };

  function handleRemember(event) {
    event.target.checked
      ? localStorage.setItem("rememberMe", true)
      : localStorage.setItem("rememberMe", false);
    console.log("Remember me : " + localStorage.getItem("rememberMe"));
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(submiForm)}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="email"
              {...register("email")}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="password"
              {...register("password")}
              required
            />
            Password: `password123`
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              onChange={(e) => {
                handleRemember(e);
              }}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {error && <ErrorMessage>Invalid email or password!</ErrorMessage>}
          <button className="sign-in-button" type="submit" disabled={loading}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
