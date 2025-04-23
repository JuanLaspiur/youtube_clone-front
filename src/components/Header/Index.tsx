import { FiMenu, FiBell } from "react-icons/fi";
import { useSidebar } from "../../contexts/SidebarContext";
import SearchBar from "./SearchBar";
import UserAvatar from "./UserAvatar";
import "./Header.css";
import Button from "../ui/Button";

const Header: React.FC = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="header">
      {/* Lado izquierdo */}
      <div className="header__left">
        <FiMenu className="icon" onClick={toggleSidebar} />
        <img src="/gato.webp" alt="Menú" className="menu-img" />
      </div>
      {/* Buscador */}
      <SearchBar />
      {/* Lado derecho */}
      <div className="header__right">
        <Button text="+ Crear" onClick={()=>{console.log('creando')}}/>
        <FiBell className="icon" />
        <UserAvatar />
      </div>
    </header>
  );
};

export default Header;
