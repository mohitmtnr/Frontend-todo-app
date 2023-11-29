import React from "react";
import ListAltIcon from "@mui/icons-material/ListAlt";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm fixed-top bg-light ">
      <div className="container-fluid d-flex justify-content-between ">
        <a className="navbar-brand  mx-3 text-capitalize fs-6" href="/">
          <ListAltIcon fontSize="large" />
          <span className="ml-2"> Todo List</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
