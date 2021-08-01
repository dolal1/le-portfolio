import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600">
      <div className="container mx-auto justify-between flex">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-yellow-400 text-4xl cursive tracking-widest"
          >
            Olal D.H.
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-blue-100 bg-blue-700"
            className="inline-flex items-center p-3 my-6 rounded text-blue-200 hover:text-yellow-400"
          >
            Projects
          </NavLink>
          <NavLink
            to="/blog"
            activeClassName="text-blue-100 bg-blue-700"
            className="inline-flex items-center p-3 my-6 rounded text-blue-200 hover:text-yellow-400"
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-blue-100 bg-blue-700"
            className="inline-flex items-center p-3 my-6 rounded text-blue-200 hover:text-yellow-400"
          >
            About Me!
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
