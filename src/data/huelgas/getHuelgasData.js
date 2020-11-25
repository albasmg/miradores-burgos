import photo1 from '../../assets/images/huelgas/huelgas-1.jpg';
import photo2 from '../../assets/images/huelgas/huelgas-2a.jpg';
import photo3 from '../../assets/images/huelgas/huelgas-2b.jpg';
import photo4 from '../../assets/images/huelgas/huelgas-2c.jpg';
import photo5 from '../../assets/images/huelgas/huelgas-2d.jpg';
import photo6 from '../../assets/images/huelgas/huelgas-3a.jpg';

const HUELGAS = {
  subheaderTitle: 'Desde el atrio del Museo de la Evolución',
  introduction: {
    text: {
      firstParagraph:
        'Otro monumento imprescindible de Burgos son Las Huelgas Reales. Un monasterio de monjas cistercienses, fundado en 1187 por Alfonso VIII como panteón real, que impresiona por su belleza formal y por el ingente patrimonio acumulado entre sus muros. Aunque resulte contradictorio, en su interior se conservan algunas de las construcciones de más clara raíz musulmana de toda España. Los expertos nos dicen además que en Las Huelgas se ensayaron muchas de las técnicas constructivas de un nuevo estilo arquitectónico que unas pocas décadas después se plasmaría con todo su esplendor en el gótico de la Catedral burgalesa.',
    },
    image: [photo1],
  },
  sections: [
    {
      title: 'Cumbre del arte cisterciense',
      bodyText:
        'Mientras el exterior de Las Huelgas refleja con exactitud la planificación habitual en los monasterios cistercienses —con su acusado juego de volúmenes entre las tres largas naves, el crucero con sus hastiales y la maciza torre que preside el conjunto—; en su interior lucen con luz propia la iglesia y panteón real. En este último ámbito, ya dentro de la clausura, destaca el doble sarcófago en el que están enterrados los fundadores. La sala capitular, considerada la joya del arte cisterciense español, las Claustrillas, claustro de inspiración románica, y las capillas, con llamativos elementos del arte hispanomusulmán, de La Asunción y de Santiago completan su rico patrimonio.',
      image: [photo2, photo3, photo4, photo5],
    },
    {
      title: 'Museo de Ricas Telas',
      bodyText:
        'Es uno de los museos de tejidos más importantes y con mayor originalidad del mundo. Su importancia radica en la magnífica colección de vestimentas de los siglos XII y XIV que se han conservado en la mayoría de las tumbas que componen el panteón real. Tafetanes y brocados de seda con ricos entorchados de oro y plata son la base principal de las aljubas, pellotes y mantos, tanto femeninos como masculinos.',
      image: [photo6],
    },
  ],
  nextSteps: {
    text:
      'Un poco alejado del centro, al monasterio de Las Huelgas Reales se puede llegar en transporte público, en bici o caminando. Esta última es quizá la opción más adecuada para saborear toda la belleza de las riberas del Arlanzón y el parque de La Isla. Son 30 minutos de cómodo paseo',
    nextMirador: '/exterior',
  },
};

export default HUELGAS;
