import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../slices/userActions";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const dispatch = useDispatch();
  const { loading, userToken, status } = useSelector(
    (state) => state.authorization
  );

  async function authenticate(event) {
    event.preventDefault();
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={authenticate}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <a href="./user" className="sign-in-button">
            Sign In
          </a>
        </form>
      </section>
    </main>
  );
}
