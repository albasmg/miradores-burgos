import { Link } from 'react-router-dom';
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

const Home = () => {
  return (
    <div className="home">
      <Link to="/miradores/1">
        <div
          className="home__mirador"
          style={{ backgroundImage: `url(${mirador1photo})` }}
        >
          <p className="home__title">Desde Museo Evolución</p>
        </div>
      </Link>
      <Link to="/miradores/2">
        <div
          className="home__mirador"
          style={{ backgroundImage: `url(${mirador2photo})` }}
        >
          <p className="home__title">Desde El Espolón</p>{' '}
        </div>
      </Link>
      <Link to="/miradores/3">
        <div
          className="home__mirador"
          style={{ backgroundImage: `url(${mirador3photo})` }}
        >
          <p className="home__title">Desde la Plaza Mayor</p>{' '}
        </div>
      </Link>
      <Link to="/miradores/4">
        <div
          className="home__mirador"
          style={{ backgroundImage: `url(${mirador4photo})` }}
        >
          <p className="home__title">Desde Las Llanas</p>{' '}
        </div>
      </Link>
      <Link to="/miradores/5">
        <div
          className="home__mirador"
          style={{ backgroundImage: `url(${mirador5photo})` }}
        >
          <p className="home__title">Desde El Castillo</p>{' '}
        </div>
      </Link>
      <Link to="/miradores/6">
        <div
          className="home__mirador"
          style={{ backgroundImage: `url(${mirador6photo})` }}
        >
          <p className="home__title">Desde San Nicolás</p>{' '}
        </div>
      </Link>
      <Link to="/miradores/7">
        <div
          className="home__mirador"
          style={{ backgroundImage: `url(${mirador7photo})` }}
        >
          <p className="home__title">Desde Puente Besson</p>{' '}
        </div>
      </Link>
      <Link to="/miradores/8">
        <div
          className="home__mirador"
          style={{ backgroundImage: `url(${mirador8photo})` }}
        >
          <p className="home__title">Desde Puente Santa María</p>{' '}
        </div>
      </Link>
      <Link to="/cartuja">
        <div
          className="home__mirador"
          style={{ backgroundImage: `url(${miradorCartujaPhoto})` }}
        >
          <p className="home__title">Desde La Cartuja</p>{' '}
        </div>
      </Link>
      <Link to="/huelgas">
        <div
          className="home__mirador"
          style={{ backgroundImage: `url(${miradorHuelgasPhoto})` }}
        >
          <p className="home__title">Desde Las Huelgas</p>{' '}
        </div>
      </Link>
      <Link to="/exterior">
        <div
          className="home__mirador"
          style={{ backgroundImage: `url(${miradorExteriorPhoto})` }}
        >
          <p className="home__title">Paseo Alrededor Catedral</p>{' '}
        </div>
      </Link>
      <Link to="/interior">
        <div
          className="home__mirador"
          style={{ backgroundImage: `url(${miradorInteriorPhoto})` }}
        >
          <p className="home__title">Imprescindibles Catedral</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
