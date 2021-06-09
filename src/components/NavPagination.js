import React from "react";

export const NavPagination = ({
  charactersPerPage,
  numberOfCharacter,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];
  let i = 1;
  for (; i <= numberOfCharacter / charactersPerPage + 1; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex--center">
      <div className="pagination center">
        {pageNumbers.map((pageNumber) => (
          <button
            className={currentPage === pageNumber ? "active" : null}
            key={pageNumber}
            onClick={() => {
              setCurrentPage(pageNumber);
            }}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};
