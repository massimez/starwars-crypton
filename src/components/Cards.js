import React, { useState, useEffect } from "react";
import CardCharacter from "./CardCharacter";
import { NavPagination } from "./NavPagination";
import axios from "axios";

const Cards = () => {
  const [loading, setloading] = useState(false);
  const [numberOfCharacter, setNumberOfCharacter] = useState();
  const [Characters, setCharacters] = useState();
  const [filteredDataByGender, setFilteredDataByGender] = useState([]);
  const [searchedByName, setsearchedByName] = useState();
  //Pagination
  let charactersPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLast = currentPage * charactersPerPage;
  const indexOfFirstPost = indexOfLast - charactersPerPage;
  const PaginatedFiltredCharacters = filteredDataByGender.slice(
    indexOfFirstPost,
    indexOfLast
  );

  useEffect(() => {
    setloading(true);
    let AllCharacters = [];
    let URLs = [
      "https://swapi.dev/api/people/?page=1",
      "https://swapi.dev/api/people/?page=2",
      "https://swapi.dev/api/people/?page=3",
      "https://swapi.dev/api/people/?page=4",
      "https://swapi.dev/api/people/?page=5",
      "https://swapi.dev/api/people/?page=6",
      "https://swapi.dev/api/people/?page=7",
      "https://swapi.dev/api/people/?page=8",
      "https://swapi.dev/api/people/?page=9",
    ];
    
    const fetchDataAllUrls = (URLs) => {
      Promise.all(URLs.map(FetchDataOneUrl)).then(() => {
        setloading(false);
        //Добавление id из свойства url
        AllCharacters.forEach((item) => {
          item.id = getIdByURL(item.url);
        });
        setCharacters(AllCharacters);
        setFilteredDataByGender(AllCharacters);
      });
    };
    async function FetchDataOneUrl(URL) {
      await axios
        .get(URL)
        .then((response) => {
          AllCharacters = AllCharacters.concat(response.data.results);
          setNumberOfCharacter(response.data.count);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    fetchDataAllUrls(URLs);
  }, []);

  const handleSearchbyName = (event) => {
    let nameToBeSearched = event.target.value.toLowerCase();
    let result = [];
    result = Characters.filter((character) => {
      return character.name.toLowerCase().indexOf(nameToBeSearched) > -1;
    });
    setCurrentPage(1);
    setsearchedByName(result);
    setFilteredDataByGender(result);
    setNumberOfCharacter(result.length);
    document.getElementById("Filter-gender").selectedIndex = 0;
  };

  const handleFilterByGender = (event) => {
    let gender = event.target.value.toLowerCase();
    if (gender === "male" || gender === "female" || gender === "n/a") {
      let result = searchedByName ? searchedByName : Characters;
      result = result.filter((charachterr) => {
        return charachterr.gender.toLowerCase() === gender;
      });
      setCurrentPage(1);
      setFilteredDataByGender(result);
      setNumberOfCharacter(result.length);
    } else if (searchedByName) setFilteredDataByGender(searchedByName);
  };

  if (loading)
    return (
      <div className="section">
        <div className="lds-dual-ring">Loading...</div>
      </div>
    );

  return (
    <div className="section">
      <div className="flex flex--space">
        <input
          id="search"
          placeholder="Search by name"
          type="text"
          className="search"
          onChange={(event) => {
            handleSearchbyName(event);
          }}
        />
        <select
          name="gender"
          id="Filter-gender"
          onChange={(ev) => {
            handleFilterByGender(ev);
          }}
        >
          <option value="">--Choose gender--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="n/a">Droid</option>
        </select>
      </div>
      <div className="grid-container mb-16 mt-16">
        {PaginatedFiltredCharacters &&
          PaginatedFiltredCharacters.map((character, index) => (
            <CardCharacter
              key={index}
              char={character}
              id={character.id}
              name={character.name}
              planet={character.homeworld}
            />
          ))}
      </div>
      <NavPagination
        numberOfCharacter={numberOfCharacter}
        charactersPerPage={charactersPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Cards;

function getIdByURL(url) {
  let reg = url.match(/\/people\/(\d+)\//);
  return parseInt(reg[1]);
}
