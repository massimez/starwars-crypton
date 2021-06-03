import React, { useState ,useEffect} from "react";
import { IoMdHeart } from "react-icons/io";
import { addToFavorite, getFavorites } from "../modules/favorites";
import axios from 'axios'

const CardCharacter = (props) => {
  const [Fav, setFav] = useState(getFavorites());
  const [homeland, sethomeland] = useState();

  let __FOUND = Fav.find(function (post, index) {
    if (post.name === props.name) return true;
  });
  axios(props.planet).then(res => sethomeland(res.data.name))
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
          {__FOUND ? (
            <div>
              <IoMdHeart className="card__icon--red" size="40px" />
            </div>
          ) : (
            <div
              onClick={() => {
                addToFavorite(props.char);
                setFav(getFavorites())
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
