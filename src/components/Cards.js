import React, { useState, useEffect } from "react";
import CardCharacter from "./CardCharacter";
import { NavPagination } from "./NavPagination";
import axios from "axios";

const Cards = () => {
  const [Characters, setCharacters] = useState();
  const charactersPerPage = 10;
  const [totalCharacters, settotalCharacters] = useState();
  const [loading, setloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setloading(true);
    let totaldata = [];
    const url = `https://swapi.dev/api/people/`;
    async function getCharacters(url) {
      await axios(url)
        .then((res) => {
          settotalCharacters(res.data.count);
          if (res.data.next !== null) {
            totaldata = totaldata.concat(res.data.results);
            getCharacters(res.data.next.slice(0, 4) + "s"+ res.data.next.slice(4));
          } else {
            totaldata = totaldata.concat(res.data.results);
            totaldata.forEach((item, i = 1) => {
              item.id = i + 1;
            });
            setCharacters(totaldata);
            setFilteredData(totaldata);
            setloading(false);
          }
        })
        .catch((err) => console.log(err));
    }
    getCharacters(url);
  }, []);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = Characters.filter((data) => {
      return (
        data.name.toLowerCase().indexOf(value) > -1 ||
        data.gender.toLowerCase() === value
      );
    });
    setCurrentPage(1);
    setFilteredData(result);
    settotalCharacters(result.length);
  };
  if (loading)
    return (
      <div className="section">
        <div className="lds-dual-ring">Loading...</div>
      </div>
    );
  //Pagination
  const indexOfLast = currentPage * charactersPerPage;
  const indexOfFirstPost = indexOfLast - charactersPerPage;
  const PagiData = filteredData.slice(indexOfFirstPost, indexOfLast);

  return (
    <div className="section">
      <div className="flex flex--space">
        <input
          placeholder="Search by name"
          type="text"
          className="search"
          onChange={(event) => handleSearch(event)}
        />
        <select
          name="genre"
          onChange={(ev) => {
            handleSearch(ev);
          }}
        >
          <option value="">--Choose genre--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="n/a">Droid</option>
        </select>
      </div>
      <div className="grid-container mb-16 mt-16">
        {PagiData &&
          PagiData.map((ch, index) => (
            <CardCharacter
              key={index}
              char={ch}
              id={ch.id}
              name={ch.name}
              planet={ch.homeworld}
            />
          ))}
      </div>
      <NavPagination
        totalCharacters={totalCharacters}
        charactersPerPage={charactersPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Cards;
