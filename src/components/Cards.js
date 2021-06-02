import React, {useState,useEffect} from "react";
import Search from "./Search";
import CardCharacter from "./CardCharacter";
import {NavPagination} from "./NavPagination";

const Cards = () => {
  const [Characters, setCharacters] = useState([])

  return (
    <div className="section">
      <Search />
      <div class="grid-container mt-16">
      
        <div>
          <CardCharacter />
        </div>
        <div>
          <CardCharacter />
        </div>
        <div>
          <CardCharacter />
        </div>
        <div>
          <CardCharacter />
        </div>
        <div>
          <CardCharacter />
        </div>
      </div>
      <NavPagination />
    </div>
  );
};

export default Cards;
