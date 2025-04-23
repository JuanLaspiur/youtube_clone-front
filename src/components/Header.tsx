import { useState } from "react";
import { FiMenu, FiSearch, FiMic, FiBell } from "react-icons/fi";
import "./Header.css";
import { useSidebar } from "../contexts/SidebarContext";

const Header: React.FC = () => {
  const { toggleSidebar } = useSidebar(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleUserMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <header className="header">
      {/* Lado izquierdo */}
      <div className="header__left">
        <FiMenu className="icon" onClick={toggleSidebar}/> {/* QUE SEA IGUAL Y QUE SEA UNA IAMGEN */}
     
          <img
  src="/gato.webp" 
  alt="Menú"
   className="menu-img"
/> 
      </div>


      {/* Buscador */}
      <div className="header__search">
        <input type="text" placeholder="Buscar" />
        <button className="search-btn"><FiSearch /></button>
        <button className="mic-btn"><FiMic /></button>
      </div>

      {/* Lado derecho */}
      <div className="header__right">
        <button className="create-btn">+ Crear</button>
        <FiBell className="icon" />
        <div className="user-avatar-container">
          <img
            className="avatar"
            src="https://i.pravatar.cc/40"
            alt="Perfil"
            onClick={toggleUserMenu}
          />
          {isMenuOpen && (
            <div className="user-menu">
              <div className="user-info">
                <img src="https://i.pravatar.cc/40" alt="Perfil" />
                <div>
                  <strong>Cosquín</strong>
                  <p>@cosquinjuan</p>
                  <a href="#">Ver tu canal</a>
                </div>
              </div>
              <hr />
              <ul>
                <li><span>🟢</span> Cuenta de Google</li>
                <li><span>👥</span> Cambiar de cuenta</li>
                <li><span>🚪</span> Salir</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
