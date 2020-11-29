import photo1 from '../../../assets/images/mirador-1/desde_elmeh-1.jpg';
import photo2 from '../../../assets/images/mirador-1/desde_elmeh-2.jpg';
import photo3 from '../../../assets/images/mirador-1/desde_elmeh-3.jpg';
import photo4 from '../../../assets/images/mirador-1/desde_elmeh-4.jpg';
import plano from '../../../assets/images/planos/plano-web-mirador1.jpg';

const MIRADOR_1 = {
  subheaderTitle: 'Desde el atrio del Museo de la Evolución',
  introduction: {
    text: {
      firstParagraph:
        'De tú a tú, así pueden tratarse el Museo de la Evolución Humana (MEH) y la Catedral de Burgos. Los dos forman parte del exclusivo listado del Patrimonio de la Humanidad de la Unesco, el primero por alojar los fósiles originales de los homínidos hallados en la Sierra de Atapuerca y la segunda por ser una de las joyas más deslumbrantes del arte gótico mundial.',
      secondParagraph:
        'Desde el atrio de entrada del MEH, <strong>diseñado por el arquitecto Navarro Baldeweg</strong> como un novedoso mirador elevado unos cuantos metros sobre las frondosas riberas del río Arlanzón, se contempla una atractiva panorámica del centro histórico de la ciudad presidido por el inconfundible perfil de la Catedral. También es el escenario de las mejores puestas de sol del verano burgalés.',
    },
    image: [photo1, plano],
  },
  sections: [
    {
      title: 'El museo del primer europeo',
      bodyText:
        'El MEH de Burgos es el contrapunto moderno e innovador dentro del amplio patrimonio monumental burgalés. Referente mundial en el campo de evolución humana, en su diáfano interior se rinde un homenaje a la razón y a la investigación científica personificadas en Darwin y Ramón y Cajal. Es una obligación entrar al museo para enfrentarse cara a cara con los restos del Homo antecessor, esa nueva especie con más de un millón de años de antigüedad y considerada como el primer europeo, y con los numerosos fósiles de Homo heidelbergensis acumulados en la famosa Sima de los Huesos.',
      image: [photo2],
    },
    {
      title: 'La memoria del Cid Campeador',
      bodyText:
        'Desde el mirador del MEH también se distingue el conjunto monumental en homenaje al más famoso y legendario héroe burgalés:  el puente de San Pablo, con sus ocho esculturas pétreas, y la estatua ecuestre del Cid Campeador. Las dos obras artísticas, que alcanzan una elevada relación espacial, se inauguraron en 1955. Otros enclaves cidianos que recuerdan la presencia, legendaria o real, de Rodrigo Díaz de Vivar en Burgos son el el Solar del Cid, la iglesia de Santa Águeda, la Catedral —en la que están enterrados sus restos—, el arco de Santa María y el monumento sobre la glera del Arlanzón.',
      image: [photo3],
    },
    {
      title: 'Paseo del Espoloncillo',
      bodyText:
        'Si hacemos caso al premio Nobel norteamericano Ernest Hemingway, que solía detenerse en Burgos durante sus viajes por España, justo a 200 metros del MEH y en el sombreado paseo del Espoloncillo nos vamos a encontrar con una de las más bellas panorámicas urbanas de Europa. Que los viajeros juzguen por si mismos, pero la vista de las riberas del Arlanzón —rebosantes de biodiversidad— con el Paseo del Espolón y el perfil de la Catedral al otro lado del río no van a dejar a nadie indiferente.',
      image: [photo4],
    },
    {
      title: 'Otro museo a cinco minutos',
      bodyText:
        'A solo cinco minutos andando nos queda el Museo de Burgos, uno de los mejores en su género de España y visita imprescindible para los viajeros que quieran profundizar en la memoria de la capital del Arlanzón. Situado en el interior de los bellos palacios renacentistas de Miranda, Angulo y Melgosa, tiene un aire cuidado, moderno y rigurosamente didáctico que invita al agradable aprovechamiento de todos sus contenidos.',
      linkText: 'LINK',
      image: [photo1],
    },
  ],
  nextSteps: {
    text:
      'Hay que cruzar por el puente de San Pablo y en la plaza de Mio Cid desviarse a la izquierda para entrar en el Paseo del Espolón.',
    nextMirador: '/miradores/2',
  },
};

export default MIRADOR_1;
