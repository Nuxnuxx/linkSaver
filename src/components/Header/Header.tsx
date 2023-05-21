import { Link } from "react-router-dom";
import './header.css'

function Header() {
  return (
    <div className="header">
      <Link className="link new" to="/new">
        <div> Ajouter un nouveau liens </div>
      </Link>
      <Link className="link list" to="/">
        <div> Liste des liens </div>
      </Link>
    </div>
  );
}

export default Header;
