import React, { useState, useEffect } from "react";
import { IoMdHeart } from "react-icons/io";
import { addToFavorite, getFavorites } from "../modules/favoritesFunctions";
import axios from "axios";

const CardCharacter = (props) => {
  const [favorites, setFav] = useState(getFavorites());
  const [homeland, setHomeland] = useState();

  let isInFavorites = favorites.find((post) => {
    if (post.name === props.name) return true;
    return false;
  });
  //http to https
  useEffect(() => {
    axios(props.planet.slice(0, 4) + "s" + props.planet.slice(4)).then((res) =>
      setHomeland(res.data.name)
    );
  }, [props.planet]);

  return (
    <>
      <div className="card">
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`}
          alt="Avatar"
        />
        <div>
          <h4>
            <b>{props.name}</b>
          </h4>
          <p>{homeland}</p>
          {isInFavorites ? (
            <div>
              <IoMdHeart className="card__icon--red" size="40px" />
            </div>
          ) : (
            <div
              onClick={() => {
                addToFavorite(props.char);
                setFav(getFavorites());
              }}
            >
              <IoMdHeart className="card__icon--black" size="40px" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default CardCharacter;
