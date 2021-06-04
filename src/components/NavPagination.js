import React from "react";

export const NavPagination = ({
  charactersPerPage,
  totalCharacters,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];
  let i = 1;
  for (; i <= totalCharacters / charactersPerPage + 1; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex--center">
      <div className="pagination center">
        {pageNumbers.map((n) => (
          <button
            className={currentPage === n ? "active" : null}
            key={n}
            onClick={() => {
              setCurrentPage(n);
            }}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
};
