import { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../../../assets/icons/menu.png';
import arrowIcon from '../../../assets/icons/flecha.svg';
import Menu from '../../components/Menu/Menu';

const Mirador = ({ subheaderTitle, introduction, sections, nextSteps }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="mirador">
      <div className="mirador__subheader">
        <div onClick={handleMenuClick}>
          <img src={menuIcon} alt="menu" className="mirador__menu"></img>
        </div>
        <h3 className="mirador__subheaderTitle">{subheaderTitle}</h3>
      </div>
      {isMenuOpen && <Menu onMenuClick={handleMenuClick} />}
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
          <div className="mirador__imageContainer">
            {introduction.image.map((img, index) => (
              <img
                className="mirador__image"
                src={img}
                alt={index}
                key={index}
              ></img>
            ))}
          </div>
        </div>
        {sections.map(({ title, bodyText, image }) => (
          <div key={title} className="mirador__section">
            <h4 className="mirador__sectionTitle">{title}</h4>
            <p className="mirador__sectionText">{bodyText}</p>
            <div className="mirador__imageContainer">
              {image.map((img, index) => (
                <img
                  className="mirador__image"
                  src={img}
                  alt={index}
                  key={index}
                ></img>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Link to={nextSteps.nextMirador}>
        <div className="mirador__nextStep">
          <div className="desktop-wrapper">
            <p className="mirador__nextStepTitle">Siguiendo la ruta...</p>
            <div className="mirador__descriptionWrapper">
              <p className="mirador__nextStepDescription">{nextSteps.text}</p>
              <div className="mirador__arrowWrapper">
                <img src={arrowIcon} alt="Siguiente" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Mirador;
