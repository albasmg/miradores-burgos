import { Link } from 'react-router-dom';

const Mirador = ({ subheaderTitle, introduction, sections, nextSteps }) => {
  return (
    <section className="mirador">
      <div className="mirador__subheader">
        <h3 className="mirador__subheaderTitle">{subheaderTitle}</h3>
      </div>
      <div className="desktop-wrapper">
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
          <div className="mirador__imageWrapper">
            <img
              className="mirador__image"
              src={introduction.image}
              alt={introduction.title}
            />
          </div>
        </div>
        {sections.map(({ title, bodyText, linkText, image }) => (
          <div key={title} className="mirador__section">
            <h4 className="mirador__sectionTitle">{title}</h4>
            <p className="mirador__sectionText">{bodyText}</p>
            <img className="mirador__image" src={image} alt={title}></img>
          </div>
        ))}
        <div className="mirador__nextStep">
          <p className="mirador__nextStepTitle">Siguiendo la ruta...</p>
          <p className="mirador__nextStepDescription">{nextSteps.text}</p>
          <Link to={`/miradores/${nextSteps.nextMirador}`} />
        </div>
      </div>
    </section>
  );
};

export default Mirador;
