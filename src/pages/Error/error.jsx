import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="main errorMessage">
      <h1>Erreur 404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link className="homePage-link" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
