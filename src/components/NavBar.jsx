import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      Library
      <div className="container-fluid d-flex justify-content-center">
        <input
          className="form-control me-4 w-25 p-3"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
