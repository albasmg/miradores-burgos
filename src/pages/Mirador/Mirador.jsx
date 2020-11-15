import { useParams } from 'react-router-dom';
import MiradorPage from '../../ui/pages/Mirador/Mirador';
import MIRADOR_1_DATA from '../../data/mirador/mirador-1/getMiradorOneData';

const MIRADOR_DATA = {
  1: MIRADOR_1_DATA,
};

const Mirador = () => {
  const { miradorId } = useParams();

  console.log(miradorId);

  return (
    <MiradorPage
      subheaderTitle={MIRADOR_DATA[miradorId].subheaderTitle}
      introduction={MIRADOR_DATA[miradorId].introduction}
      sections={MIRADOR_DATA[miradorId].sections}
      nextSteps={MIRADOR_DATA[miradorId].nextSteps}
    />
  );
};

export default Mirador;
