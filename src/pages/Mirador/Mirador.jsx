import { useParams } from 'react-router-dom';
import MiradorPage from '../../ui/pages/Mirador/Mirador';
import MIRADOR_1_DATA from '../../data/mirador/mirador-1/getMiradorOneData';
import MIRADOR_2_DATA from '../../data/mirador/mirador-2/getMiradorTwoData';
import MIRADOR_3_DATA from '../../data/mirador/mirador-3/getMiradorThreeData';
import MIRADOR_4_DATA from '../../data/mirador/mirador-4/getMiradorFourData';
import MIRADOR_5_DATA from '../../data/mirador/mirador-5/getMiradorFiveData';
import MIRADOR_6_DATA from '../../data/mirador/mirador-6/getMiradorSixData';
import MIRADOR_7_DATA from '../../data/mirador/mirador-7/getMiradorSevenData';
import MIRADOR_8_DATA from '../../data/mirador/mirador-8/getMiradorEightData';

const MIRADOR_DATA = {
  1: MIRADOR_1_DATA,
  2: MIRADOR_2_DATA,
  3: MIRADOR_3_DATA,
  4: MIRADOR_4_DATA,
  5: MIRADOR_5_DATA,
  6: MIRADOR_6_DATA,
  7: MIRADOR_7_DATA,
  8: MIRADOR_8_DATA,
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
