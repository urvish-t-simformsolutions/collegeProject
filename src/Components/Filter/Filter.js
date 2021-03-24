import React from "react";
import "./Filter.css";

const Filter = (props) => {
  let reset = null;

  if (props.sortBy) {
    reset = (
      <div className="button">
        <button
          type="submit"
          value="log in "
          className="btn_3"
          onClick={props.reset}
        >
          Reset Filter
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search....."
            onChange={(e) => props.searchTerm(e.target.value)}
            value={props.searchField}
            className="sea-btn"
          />
        </div>
        <div className="select-option">
          <div className="sel-sort">Sort By : {props.sortBy}</div>
          <div
            onClick={(e) => props.sortArr(e.target.value)}
            className="option"
          >
            <button value="Low to High">Low to High</button>
            <button value="High to Low">High to Low</button>
          </div>
        </div>
        <div className="category-option">
          <div className="sel-sort">Category: </div>
          <div onClick={() => {}} className="option">
            <button value="Low to High">Category 1</button>
            <button value="High to Low">Category 2</button>
            <button value="High to Low">Category 3</button>
            <button value="High to Low">Category 4</button>
          </div>
        </div>
      </div>
      {reset}
    </>
  );
};

export default Filter;
