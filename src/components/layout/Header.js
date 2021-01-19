import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/context";
import PropTypes from "prop-types";

const Header = ({ header: { title, breadcrumbs, color } }) => {
  const context = useContext(Context);
  const { setActiveLink } = context;

  return (
    <div
      className="header"
      style={{ borderBottom: `6px solid ${color}` }}
      data-aos="fade-down"
    >
      <h1 style={{ color }}>{title}</h1>
      <ul>
        {breadcrumbs.map((bc, index) => (
          <li key={index}>
            <Link to={bc[0]} onClick={() => setActiveLink(bc[0])}>
              {bc[1]}
            </Link>
            {index !== breadcrumbs.length - 1 && (
              <i className="fas fa-chevron-right" style={{ color }}></i>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

Header.propTypes = {
  header: PropTypes.object.isRequired,
};

export default Header;
