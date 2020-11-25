import MiradorPage from '../../ui/pages/Mirador/Mirador';
import HUELGAS from '../../data/huelgas/getHuelgasData';

const Huelgas = () => {
  return (
    <MiradorPage
      subheaderTitle={HUELGAS.subheaderTitle}
      introduction={HUELGAS.introduction}
      sections={HUELGAS.sections}
      nextSteps={HUELGAS.nextSteps}
    />
  );
};

export default Huelgas;
