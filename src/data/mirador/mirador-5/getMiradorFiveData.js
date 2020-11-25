import photo1 from '../../../assets/images/mirador-5/desde-castillo-1.jpg';
import photo2 from '../../../assets/images/mirador-5/desde-castillo-2.jpg';
import photo3 from '../../../assets/images/mirador-5/desde-castillo-3.jpg';
import photo4 from '../../../assets/images/mirador-5/desde-castillo-4.jpg';
import photo5 from '../../../assets/images/mirador-5/desde-castillo-5.jpg';

const MIRADOR_5 = {
  subheaderTitle: 'Desde el mirador del Castillo',
  introduction: {
    text: {
      firstParagraph:
        'Toda urbe medieval que se precie tiene un castillo en lo más alto y Burgos no es una excepción. En las inmediaciones de esta histórica fortaleza en la que el conde Diego Porcelos, por encargo del rey de Asturias Alfonso III, fundó la ciudad en el año 884 se localiza el privilegiado mirador del Castillo. Es el mejor lugar para disfrutar de la más completa panorámica de la Catedral, del entramado urbano de la capital castellana y de unos atardeceres inolvidables.',
    },
    image: [photo1],
  },
  sections: [
    {
      title: 'Para tocar la catedral',
      bodyText:
        'La recompensa supera con creces el esfuerzo requerido para subir hasta lo más alto de la ciudad. Además, se pueden tomar, desde el albergue de Peregrinos de la calle Fernán González, un ascensor y dos escaleras mecánicas que facilitan el ascenso. Desde el Mirador del Castillo nos daremos cuenta de las verdaderas dimensiones de la Catedral con las marcadas y decrecientes siluetas de las torres, el cimborrio y la capilla del Condestable. También sobre su barandilla perimetral se localiza un artístico perfil metálico que, con el dibujo y la orientación exacta, permite situar los principales enclaves y monumentos.',
      image: [photo2],
    },
    {
      title: 'El origen de Burgos',
      bodyText:
        'Seguramente sobre un embrión anterior, el origen de la ciudad de Burgos se remonta a finales del siglo IX, cuando el río Arlanzón se convirtió en la disputada frontera de los repobladores cristianos que bajaban de las montañas del norte. Bajo la protectora sombra de esta estratégica fortaleza se fue desarrollando un primitivo y amurallado núcleo urbano que con el paso de los siglos acabaría siendo uno de los centros neurálgicos de Castilla. Dentro del restaurado castillo existe un cuidado museo con visitas opcionales a unas misteriosas galerías y a un profundo pozo, incluido entre las joyas de la ingeniería medieval europea.',
      image: [photo3],
    },
    {
      title: 'San Esteban y sus retablos',
      bodyText:
        'Tras admirar la amplia panorámica de Mirador del Castillo y visitar los restos de la fortaleza burgalesa, lo mejor es regresar por el mismo camino hasta la iglesia de San Esteban. En el interior de este templo del siglo XIII, edificado sobre otro anterior románico y con muchas influencias de la cercana Catedral, tiene su sede el Museo del Retablo. Las obras expuestas proceden de distintas iglesias de la diócesis y se pueden fechar entre los siglos XV y XVIII. Algunas de las piezas están entre las mejores y más bellas en su género. También es muy interesante su colección de orfebrería religiosa.',
      image: [photo4],
    },
    {
      title: 'Contrapunto arquitectónico',
      bodyText:
        'A la vera de la iglesia de San Esteban se localiza el CAB, un contrapunto arquitectónico y cultural en la parte alta del casco antiguo burgalés. El Centro de Arte de Burgos consta de tres originales volúmenes que se asoman a la ciudad dando forma a un atrevido mirador con buenas y originales vistas a la Catedral. Además, sus instalaciones acogen las más novedosas tendencias de la creación contemporánea. A tres minutos andando por la calle Saldaña nos encontraremos el arco de San Esteban, una de las dos puertas mudéjares de las murallas de Burgos. La otra es la de San Martín.',
      linkText: 'LINK',
      image: [photo5],
    },
  ],
  nextSteps: {
    text:
      'La calle de Pozo Seco, que arranca desde la misma puerta de la iglesia de San Esteban, permite bajar de nuevo hasta la calle Fernán González y el atrio de la iglesia de San Nicolás',
    nextMirador: '/miradores/6',
  },
};

export default MIRADOR_5;
