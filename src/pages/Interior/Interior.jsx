import MiradorPage from '../../ui/pages/Mirador/Mirador';
import INTERIOR from '../../data/interior/getInteriorData';

const Interior = () => {
  return (
    <MiradorPage
      subheaderTitle={INTERIOR.subheaderTitle}
      introduction={INTERIOR.introduction}
      sections={INTERIOR.sections}
      nextSteps={INTERIOR.nextSteps}
    />
  );
};

export default Interior;
