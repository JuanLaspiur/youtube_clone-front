import { useState } from "react";
import UserMenu from "./UserMenu";

const UserAvatar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleUserMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <div className="user-avatar-container">
      <img
        className="avatar"
        src="https://i.pravatar.cc/40"
        alt="Perfil"
        onClick={toggleUserMenu}
      />
      {isMenuOpen && <UserMenu />}
    </div>
  );
};

export default UserAvatar;
