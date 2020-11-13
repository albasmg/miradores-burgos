import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';

const App = () => {
  return (
    <>
      <h1>Hola mundo</h1>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
};

export default App;
