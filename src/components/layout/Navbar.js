import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Anasayfa</Link>
      <Link to="/hakkimizda">Hakkımızda</Link>
    </nav>
  );
};

export default Navbar;
