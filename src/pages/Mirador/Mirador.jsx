import { useParams } from 'react-router-dom';

const Mirador = () => {
  const { miradorId } = useParams();

  console.log(miradorId);

  return <h1>Hola</h1>;
};

export default Mirador;
