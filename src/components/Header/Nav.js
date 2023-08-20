import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../context/DataContext";
import "./Nav.css";

const Nav = () => {
  let { search, setSearch } = useContext(DataContext);
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          id="search"
          placeholder="Search by Name/Author"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <label htmlFor="search">Search Books</label>
      </form>
      <ul>
        <li>
          <Link to="/"><b>Home</b></Link>
        </li>
        <li>
          <Link to="book"><b>New Books</b></Link>
        </li>
        <li>
          <Link to="savedbooks"><b>Saved Books</b></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;