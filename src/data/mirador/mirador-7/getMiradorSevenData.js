import photo1 from '../../../assets/images/mirador-7/desde-puentebesson-1.jpg';
import photo2 from '../../../assets/images/mirador-7/desde-puentebesson-2.jpg';
import photo3 from '../../../assets/images/mirador-7/desde-puentebesson-3.jpg';
import photo4 from '../../../assets/images/mirador-7/desde-puentebesson-4.jpg';
import photo5 from '../../../assets/images/mirador-7/desde-puentebesson-5.jpg';
import plano from '../../../assets/images/planos/plano-web-mirador7.jpg';

const MIRADOR_7 = {
  subheaderTitle: 'Desde el puente de Besson',
  introduction: {
    text: {
      firstParagraph:
        'Después de disfrutar con las variadas perspectivas de la Catedral que nos ofrece el casco antiguo y medieval de Burgos, lo mejor es buscar de nuevo las riberas del Arlanzón y cruzar el río por el peatonal puente de Bessón. En el camino iremos descubriendo nuevas panorámicas del templo catedralicio interactuando, esta vez, con la ciudad más burguesa y decimonónica. Desde la muy llamativa vista desde la calle de la Asunción, hasta las que se contemplan tras cruzar el río Arlanzón por el puente de Bessón.',
    },
    image: [photo1, plano],
  },
  sections: [
    {
      title: 'Ruta de la luz',
      bodyText:
        'Al caer la noche sobre las calles de Burgos y en una estrecha competencia con las estrellas se encienden los principales monumentos de la ciudad. En una perfecta simbiosis de naturaleza y arte, las transparentes aguas del río Arlanzón reflejan, además de los brillos plateados de la luna, los perfiles de nuestros más sobresalientes hitos patrimoniales. Cerca de treinta monumentos forman parte de esta atractiva ‘Ruta de la Luz’ que embellece las noches burgalesas. Desde la calle de la Asunción de Nuestra Señora se contempla una de las más atractivas vistas nocturnas de la Catedral.',
      image: [photo2],
    },
    {
      title: 'El Burgos más burgués',
      bodyText:
        'El peatonal puente de Bessón, tendido a finales del siglo XIX por Augusto Bessón, profesor y alcalde de la ciudad, permite cruzar el Arlanzón y situarse junto a la sede del Instituto de Bachillerato Iñigo López de Mendoza. Desde las inmediaciones de este antiguo colegio renacentista, diseñado a mediados del siglo XVI, es posible disfrutar de una interesante panorámica de la Catedral alzándose sobre los edificios del Burgos más burgués que festonean el paseo de la Audiencia. Cerca del mencionado Instituto se localizan dos notables obras escultóricas contemporáneas: el Cristo de Jaume Perelló, en la innovadora iglesia del Carmen, y el monumento al descubrimiento de América de Andreu Alfaro.',
      image: [photo3],
    },
    {
      title: 'Paraíso natural',
      bodyText:
        'Burgos puede presumir de un autentico paraíso natural que vertebra y engalana la ciudad: el río Arlanzón. Un caudal estable y limpio, regulado por los embalses de su cabecera, y unas riberas bien conservadas, han favorecido el desarrollo de un envidiable ecosistema fluvial. Sin parangón en Europa, se han contabilizado más de 250 especies de flora y fauna vertebrada. Entre las últimas destacan la presencia de nutria, pájaro moscón, pato azulón, garza real, focha común y mirlo acuático. Los seis kilómetros del Arlanzón urbano, que se pueden recorrer en cómodos paseos, están protegidos por un bosque de ribera en el crecen chopos, álamos, fresnos, y sauces.',
      image: [photo4],
    },
    {
      title: 'Centenario jardín botánico',
      bodyText:
        'Aguas abajo, el Parque de la Isla, un longitudinal eje paralelo al río Arlanzón, es un centenario jardín botánico salpicado de restos monumentales que le otorgan un melancólico aire romántico. Sucesivas reformas y plantaciones de árboles y arbustos —las más importantes se llevaron a cabo en 1813, 1817, 1846 y 1868— configuraron el actual paseo burgalés. Si arquitectónicamente muestra un atractivo trazado en el que se combinan los simétricos jardines de influencia francesa con los más informales y abiertos parterres de estilo inglés, el interés primordial del parque es su variado contenido en especies vegetales. Los grandes árboles han encontrado su acertada réplica en las obras de arte colocadas a lo largo del paseo.',
      linkText: 'LINK',
      image: [photo5],
    },
  ],
  nextSteps: {
    text:
      'Para encontrarse con el siguiente y último mirador hay que remontar el curso del río Arlanzón por el sombreado paseo de la Merced. En cuatro minutos alcanzaremos el puente de Santa María.',
    nextMirador: '/miradores/8',
  },
};

export default MIRADOR_7;
