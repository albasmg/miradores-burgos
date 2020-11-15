import logo from '../../../assets/icons/logo.png';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <div className="header__textContainer">
        <h1 className="header__title">MIRADORES</h1>
        <h2 className="header__subtitle">SOBRE LA CATEDRAL DE BURGOS</h2>
      </div>
    </header>
  );
};

export default Header;
