import { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './ui/pages/Home/Home';
import Header from './ui/components/Header/Header.jsx';
import Miradores from './ui/pages/Miradores/Miradores.jsx';
import Mirador from './pages/Mirador/Mirador';
import Huelgas from './pages/Huelgas/Huelgas';
import Exterior from './pages/Exterior/Exterior';
import Cartuja from './pages/Cartuja/Cartuja';
import Interior from './pages/Interior/Interior';
import Footer from './ui/components/Footer/Footer';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <>
      <Header />
      <Switch>
        <Route path="/miradores/:miradorId" component={Mirador} />
        <Route path="/cartuja" component={Cartuja} />
        <Route path="/huelgas" component={Huelgas} />
        <Route path="/exterior" component={Exterior} />
        <Route path="/interior" component={Interior} />
        <Route path="/miradores" exact component={Miradores} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
