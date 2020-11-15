import { Switch, Route } from 'react-router-dom';
import Header from './ui/components/Header/Header.jsx';
import Home from './pages/Home/Home.jsx';
import Mirador from './pages/Mirador/Mirador';
import Footer from './ui/components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/miradores/:miradorId" component={Mirador} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
