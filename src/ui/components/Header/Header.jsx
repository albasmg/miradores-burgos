import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/logo.svg';
import presentacionPhoto from '../../../assets/images/headers/cabeceras-presentacion.jpg';
import mirador1photo from '../../../assets/images/headers/mirador-1-cabecera.jpg';
import mirador2photo from '../../../assets/images/headers/mirador-2-cabecera.jpg';
import mirador3photo from '../../../assets/images/headers/mirador-3-cabecera.jpg';
import mirador4photo from '../../../assets/images/headers/mirador-4-cabecera.jpg';
import mirador5photo from '../../../assets/images/headers/mirador-5-cabecera.jpg';
import mirador6photo from '../../../assets/images/headers/mirador-6-cabecera.jpg';
import mirador7photo from '../../../assets/images/headers/mirador-7-cabecera.jpg';
import mirador8photo from '../../../assets/images/headers/mirador-8-cabecera.jpg';
import miradorCartujaPhoto from '../../../assets/images/headers/cartuja-cabecera.jpg';
import miradorHuelgasPhoto from '../../../assets/images/headers/huelgas-cabecera.jpg';
import miradorExteriorPhoto from '../../../assets/images/headers/exterior-cabecera.jpg';
import miradorInteriorPhoto from '../../../assets/images/headers/interior-cabecera.jpg';

import { useLocation } from 'react-router-dom';

const mapRouteToBackground = {
  '/': presentacionPhoto,
  '/miradores': mirador1photo,
  '/miradores/1': mirador1photo,
  '/miradores/2': mirador2photo,
  '/miradores/3': mirador3photo,
  '/miradores/4': mirador4photo,
  '/miradores/5': mirador5photo,
  '/miradores/6': mirador6photo,
  '/miradores/7': mirador7photo,
  '/miradores/8': mirador8photo,
  '/cartuja': miradorCartujaPhoto,
  '/huelgas': miradorHuelgasPhoto,
  '/exterior': miradorExteriorPhoto,
  '/interior': miradorInteriorPhoto,
};

const Header = () => {
  const { pathname } = useLocation();

  console.log(mapRouteToBackground[pathname]);

  return (
    <header
      className="header"
      style={{ backgroundImage: `url(${mapRouteToBackground[pathname]})` }}
    >
      <Link to="/">
        <img src={logo} alt="logo" className="header__logo" />
      </Link>
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
