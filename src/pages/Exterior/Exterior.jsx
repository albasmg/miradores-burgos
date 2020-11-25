import MiradorPage from '../../ui/pages/Mirador/Mirador';
import EXTERIOR from '../../data/exterior/getExteriorData';

const Exterior = () => {
  return (
    <MiradorPage
      subheaderTitle={EXTERIOR.subheaderTitle}
      introduction={EXTERIOR.introduction}
      sections={EXTERIOR.sections}
      nextSteps={EXTERIOR.nextSteps}
    />
  );
};

export default Exterior;
