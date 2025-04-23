const UserMenu = () => {
    return (
      <div className="user-menu">
        <div className="user-info">
          <img src="https://i.pravatar.cc/40" alt="Perfil" />
          <div>
            <strong>Cosquín</strong>
            <p>@cosquinjuan</p>
            <a href="#">Ver tu canal</a>
          </div>
        </div>
        <ul>
          <li><span>🟢</span> Cuenta de Google</li>
          <li><span>👥</span> Cambiar de cuenta</li>
          <li><span>🚪</span> Salir</li>
        </ul>
      </div>
    );
  };
  
  export default UserMenu;
  