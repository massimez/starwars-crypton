import React from "react";
import {IoMdHeart} from "react-icons/io" 
const CardCharacter = () => {
  return (
    <>
      <div className="card flex flex--center">
        <img
          src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
          alt="Avatar"
        />
        <div>
          <h4>
            <b>Jane Doe</b>
          </h4>
          <p>Interior Designer</p>
         <IoMdHeart className="card__icon--red"  size="40px"/>
        </div>
      </div>
    </>
  );
};
export default CardCharacter;
