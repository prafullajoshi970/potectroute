import { useContext } from "react";
import { AuthContext } from "./Context";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";

function Nav(props) {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);
  return (
    <div className="nav">
      <div id="title">
        <h2>React Context</h2>
      </div>
      <div id="menu">
        <Link to="/">Home</Link>
        <Link to="/Product">Product</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Login">Login</Link>
        <button
          onClick={() => {
            setIsLoggedIn(false);
            navigate("/");
          }}
        >
          Logout
        </button>
        <span style={{ marginLeft: "30px", color: "yellow", fontSize: "22px" }}>
          <b></b>
        </span>
      </div>
    </div>
  );
}

export default Nav;