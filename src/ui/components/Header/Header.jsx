import logo from '../../../assets/icons/logo.png';

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <div>
        <h1>MIRADORES</h1>
        <h2>SOBRE LA CATEDRAL DE BURGOS</h2>
      </div>
    </header>
  );
};

export default Header;
