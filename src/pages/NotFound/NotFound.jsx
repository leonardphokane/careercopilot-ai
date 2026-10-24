import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main>
      <h1>404</h1>

      <p>
        The page you requested could not
        be found.
      </p>

      <Link to="/">
        Return Home
      </Link>
    </main>
  );
}
