import { Link } from 'react-router-dom';
import mirador1photo from '../../../assets/images/miradores/mirador1.jpg';
import mirador2photo from '../../../assets/images/miradores/mirador2.jpg';
import mirador3photo from '../../../assets/images/miradores/mirador3.jpg';
import mirador4photo from '../../../assets/images/miradores/mirador4.jpg';
import mirador5photo from '../../../assets/images/miradores/mirador5.jpg';
import mirador6photo from '../../../assets/images/miradores/mirador6.jpg';
import mirador7photo from '../../../assets/images/miradores/mirador7.jpg';
import mirador8photo from '../../../assets/images/miradores/mirador8.jpg';

const Miradores = () => {
  return (
    <div className="home">
      <Link to="/miradores/1">
        <div className="home__mirador">
          <img src={mirador1photo} alt="mirador1"></img>
        </div>
      </Link>
      <Link to="/miradores/2">
        <div className="home__mirador">
          <img src={mirador2photo} alt="mirador2"></img>
        </div>
      </Link>
      <Link to="/miradores/3">
        <div className="home__mirador">
          <img src={mirador3photo} alt="mirador3"></img>
        </div>
      </Link>
      <Link to="/miradores/4">
        <div className="home__mirador">
          <img src={mirador4photo} alt="mirador4"></img>
        </div>
      </Link>
      <Link to="/miradores/5">
        <div className="home__mirador">
          <img src={mirador5photo} alt="mirador5"></img>
        </div>
      </Link>
      <Link to="/miradores/6">
        <div className="home__mirador">
          <img src={mirador6photo} alt="mirador6"></img>
        </div>
      </Link>
      <Link to="/miradores/7">
        <div className="home__mirador">
          {' '}
          <img src={mirador7photo} alt="mirador7"></img>
        </div>
      </Link>
      <Link to="/miradores/8">
        <div className="home__mirador">
          <img src={mirador8photo} alt="mirador8"></img>
        </div>
      </Link>
    </div>
  );
};

export default Miradores;
