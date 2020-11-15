const Mirador = ({ subheaderTitle, introduction, sections }) => {
  return (
    <section className="mirador">
      <div className="mirador__subheader">
        <h3 className="mirador__subheaderTitle">{subheaderTitle}</h3>
      </div>
      <div className="mirador__introduction">
        <p className="mirador__introductionParagraph">
          {introduction.text.firstParagraph}
        </p>
        <p className="mirador__introductionParagraph">
          {introduction.text.secondParagraph}
        </p>
      </div>
      {sections.map(({ title, bodyText, linkText, images }) => (
        <div key={title} className="mirador__section">
          <h4 className="mirador__sectionTitle">{title}</h4>
          <p className="mirador__sectionText">{bodyText}</p>
          {linkText && <p className="mirador__sectionLink">{linkText}</p>}
        </div>
      ))}
    </section>
  );
};

export default Mirador;
