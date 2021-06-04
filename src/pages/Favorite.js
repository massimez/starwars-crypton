import React, { useState } from "react";
import Header from "../layout/Header";
import { getFavorites } from "../modules/favorites";

const Favorite = () => {
  const [Fav, setFav] = useState(getFavorites());
  return (
    <>
      <Header />
      <div className="section">
        <center>
          <h2>My favorites</h2>
        </center>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Fav.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    height="200px"
                    width="200px"
                    src={`https://starwars-visualguide.com/assets/img/characters/${item.id}.jpg`}
                    alt={`${item.name}`}
                  />
                </td>
                <td>{item.name}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() => {
                      let favs = JSON.parse(localStorage.getItem("fav"));
                      favs.splice(index, 1);
                      setFav(favs);
                      localStorage.setItem("fav", JSON.stringify(favs));
                    }}
                  >
                    Remove from favorites
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Favorite;
