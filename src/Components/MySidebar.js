import { Link } from "react-router-dom";
import { navitems } from "../navitems";

const MySidebar = () => {
  return (
    <nav className="sidebar">
      {navitems.map((nav, i) => (
        <Link
          className="link"
            to={`${nav.link}`}
          key={i}
          // onClick={() => (window.location = nav.link)}
        >
          <div
            // id={window.location.pathname == nav.link ? "active" : ""}
            className="navitem"
          >
            <div className="navicon">{nav.icon}</div>
            <div className="navlink">{nav.title}</div>
          </div>
        </Link>
      ))}
     
    </nav>
  );
};

export default MySidebar;
