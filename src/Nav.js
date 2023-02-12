import logo from "./assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <img className="logo-img" src={logo} alt="/" />
      <Link className="cartLink" to="/cart">
        <FaShoppingCart className="icon" />
      </Link>
    </div>
  );
}
