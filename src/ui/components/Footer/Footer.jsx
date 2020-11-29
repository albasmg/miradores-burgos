import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/logo.svg';

const Header = () => {
  return (
    <footer className="footer">
      <Link to="/">
        <img src={logo} alt={logo} className="footer__logo" />
      </Link>
    </footer>
  );
};

export default Header;
