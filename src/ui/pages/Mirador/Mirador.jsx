const Mirador = ({ subheaderTitle, sections }) => {
  return (
    <>
      <div>{subheaderTitle}</div>
      {sections.map(({ title, bodyText, linkText, images }) => (
        <div key={title}>
          <h3>{title}</h3>
          <p>{bodyText}</p>
          {linkText && <p>{linkText}</p>}
        </div>
      ))}
    </>
  );
};

export default Mirador;
