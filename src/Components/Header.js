import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import {AuthContext} from "../context/auth.context"

const Header = () => {
  const {user}=useContext(AuthContext)

  console.log(user)

  return (
    <header>
      <section className="navheader">
        <div className="brand">
          <h1>Students Portal Page</h1>
        </div>
        <div className="headerlinks">
          <Link className="headerlink" to="/profile">
            {user.username}
            <VscAccount />
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
