import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';

const Mirador = ({ subheaderTitle, introduction, sections, nextSteps }) => {
  return (
    <section className="mirador">
      <div className="mirador__subheader">
        <h3 className="mirador__subheaderTitle">{subheaderTitle}</h3>
      </div>
      <div className="mirador__introduction">
        <p className="mirador__introductionParagraph">
          {introduction.text.firstParagraph}
        </p>
        <p
          className="mirador__introductionParagraph"
          dangerouslySetInnerHTML={{
            __html: introduction.text.secondParagraph,
          }}
        ></p>
        <Carousel photos={introduction.images} />
      </div>
      {sections.map(({ title, bodyText, linkText, images }) => (
        <div key={title} className="mirador__section">
          <h4 className="mirador__sectionTitle">{title}</h4>
          <p className="mirador__sectionText">{bodyText}</p>
          <Carousel photos={images} />
          {linkText && <p className="mirador__sectionLink">{linkText}</p>}
        </div>
      ))}
      <div className="mirador__nextStep">
        <p className="mirador__nextStepTitle">Siguiendo la ruta...</p>
        <p className="mirador__nextStepDescription">{nextSteps.text}</p>
        <Link to={`/miradores/${nextSteps.nextMirador}`} />
      </div>
    </section>
  );
};

export default Mirador;
