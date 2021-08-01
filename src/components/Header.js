import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Header() {
  return (
    <header className="bg-gray-700">
      <div className="container mx-auto justify-between flex flex-wrap">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-4 px-3 mr-4 text-gray-100 hover:text-yellow-400 text-4xl cursive tracking-widest"
          >
            Olal D.H.
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-gray-100 bg-gray-600"
            className="inline-flex items-center p-2 my-3 rounded text-gray-200 hover:text-yellow-400"
          >
            Projects
          </NavLink>
          <NavLink
            to="/blog"
            activeClassName="text-gray-100 bg-gray-600"
            className="inline-flex items-center p-2 my-3 rounded text-gray-200 hover:text-yellow-400"
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-gray-100 bg-gray-600"
            className="inline-flex items-center p-3 my-3 rounded text-gray-200 hover:text-yellow-400"
          >
            About Me!
          </NavLink>
        </nav>

        <div className="inline-flex p-2 my-3">
          <SocialIcon
            url="https://github.com/dolal1"
            className="mr-4"
            target="_blank"
            fgColor="#fffff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="twitter.com/HolifieldOlal"
            className="mr-4"
            target="_blank"
            fgColor="#fffff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.instagram.com/_the_ace_of_spades_/"
            className="mr-4"
            target="_blank"
            fgColor="#fffff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
