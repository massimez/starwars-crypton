import React, { useState } from "react";

export const NavPagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  let i = 1;
  for (; i <= totalPosts / postsPerPage + 1; i++) {
    pageNumbers.push(i);
  }

  return (
      <div className="flex flex--center">
         <div class="pagination center">
        <a href="#">&laquo;</a>
        <a href="#">1</a>
        <a href="#" class="active">
          2
        </a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
      </div> 
      </div>
      
  );
};
