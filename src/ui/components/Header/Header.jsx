import logo from '../../../assets/icons/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <div className="header__textContainer">
        <h2 className="header__subtitle">
          <span>SOBRE</span>
          <span> LA CATEDRAL </span>
          <span> DE BURGOS</span>
        </h2>
      </div>
    </header>
  );
};

export default Header;
