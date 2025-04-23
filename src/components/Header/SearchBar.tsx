import { FiSearch, FiMic } from "react-icons/fi";

const SearchBar = () => (
  <div className="header__search">
    <input type="text" placeholder="Buscar" />
    <button className="search-btn"><FiSearch /></button>
    <button className="mic-btn"><FiMic /></button>
  </div>
);

export default SearchBar;
