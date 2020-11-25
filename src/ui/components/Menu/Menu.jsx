import { Link } from 'react-router-dom';

const Menu = ({ onMenuClick }) => {
  const handleLinkClick = () => onMenuClick();

  return (
    <nav className="menu">
      <Link to="/miradores/1" onClick={handleLinkClick}>
        <p className="menu__item">Desde Museo Evolución</p>
      </Link>
      <Link to="/miradores/2" onClick={handleLinkClick}>
        <p className="menu__item">Desde El Espolón</p>
      </Link>
      <Link to="/miradores/3" onClick={handleLinkClick}>
        <p className="menu__item">Desde la Plaza Mayor</p>
      </Link>
      <Link to="/miradores/4" onClick={handleLinkClick}>
        <p className="menu__item">Desde Las Llanas</p>
      </Link>
      <Link to="/miradores/5" onClick={handleLinkClick}>
        <p className="menu__item">Desde El Castillo</p>
      </Link>
      <Link to="/miradores/6" onClick={handleLinkClick}>
        <p className="menu__item">Desde San Nicolás</p>
      </Link>
      <Link to="/miradores/7" onClick={handleLinkClick}>
        <p className="menu__item">Desde Puente Besson</p>
      </Link>
      <Link to="/miradores/8" onClick={handleLinkClick}>
        <p className="menu__item">Desde Puente Santa María</p>
      </Link>
      <Link to="/cartuja" onClick={handleLinkClick}>
        <p className="menu__item">Desde La Cartuja</p>
      </Link>
      <Link to="/huelgas" onClick={handleLinkClick}>
        <p className="menu__item" onClick={handleLinkClick}>
          Desde Las Huelgas
        </p>
      </Link>
      <Link to="/exterior" onClick={handleLinkClick}>
        <p className="menu__item">Paseo Alrededor Catedral</p>
      </Link>
      <Link to="/interior" onClick={handleLinkClick}>
        <p className="menu__item">Imprescindibles Catedral</p>
      </Link>
    </nav>
  );
};

export default Menu;
