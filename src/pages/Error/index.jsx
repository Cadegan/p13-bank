import { Link } from "react-router-dom";

// Error 404 page
export default function Error() {
  return (
    <div className="main errorMessage">
      <h1>Error 404</h1>
      <h2>
        Oh Snap! <br />
        Seems like the page got dusted in snap!
      </h2>
      <Link className="homePage-link" to="/">
        Go back to the home page
      </Link>
    </div>
  );
}
