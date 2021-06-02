import React from "react";
import { Link } from "react-router-dom";
import "../styles/screen.scss";
import { IoMdHeart } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div className="flex flex--space mt-8 mb-16">
        <div></div>
        <Link to="/">
          <img
            src="https://fontmeme.com/permalink/210602/5a25055fcd1d6b8db47107bfac1f58a5.png"
            alt="Starwars"
          />
        </Link>
        <Link to="/fav">
          <IoMdHeart className="card__icon--red" size="40px" />
        </Link>
      </div>
      <div className="input-size"></div>
    </>
  );
};

export default Header;
