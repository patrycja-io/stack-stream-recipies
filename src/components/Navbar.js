import { Link } from "react-router-dom";

// styles
import './Navbar.css'

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Stack-Stream Recipies</h1>
        </Link>
        <Link to="/create">Create Recipe </Link>
        </nav>
    </div>
  );
}
