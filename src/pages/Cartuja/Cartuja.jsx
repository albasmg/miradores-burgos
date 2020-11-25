import MiradorPage from '../../ui/pages/Mirador/Mirador';
import CARTUJA from '../../data/cartuja/getCartujaData';

const Huelgas = () => {
  return (
    <MiradorPage
      subheaderTitle={CARTUJA.subheaderTitle}
      introduction={CARTUJA.introduction}
      sections={CARTUJA.sections}
      nextSteps={CARTUJA.nextSteps}
    />
  );
};

export default Huelgas;
