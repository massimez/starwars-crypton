import React from "react";

const Search = () => {
  return (
    <div >
    <div className="flex flex--center  mt-4 mb-8 ">
        <input className="c-checkbox" type="checkbox" id="checkbox" />
        <div class="c-formContainer">
          <form className="c-form" action="">
            <input
              className="c-form__input"
              placeholder="Type the name"
              type="text"
              required
            />
            <label className="c-form__buttonLabel" for="checkbox">
              <button className="c-form__button" type="button">
                Search
              </button>
            </label>
            <label
              className="c-form__toggle"
              for="checkbox"
              data-title="Search by name"
            ></label>
          </form>
        </div>
      </div>
      {/* <input
          height="100%"
          type="text"
          placeholder="Search for a personnage"
        />
        <button className="btn" type="submit">
          <span>Search</span>
        </button> */}
    </div>
  );
};

export default Search;
