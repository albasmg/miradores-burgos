import photo1 from '../../assets/images/cartuja/cartuja-1a.jpg';
import photo2 from '../../assets/images/cartuja/cartuja-1b.jpg';
import photo3 from '../../assets/images/cartuja/cartuja-2a.jpg';
import photo4 from '../../assets/images/cartuja/cartuja-2b.jpg';
import photo5 from '../../assets/images/cartuja/cartuja-2c.jpg';
import photo6 from '../../assets/images/cartuja/cartuja-3a.jpg';
import photo7 from '../../assets/images/cartuja/cartuja-3b.jpg';
import photo8 from '../../assets/images/cartuja/cartuja-3c.jpg';

const CARTUJA = {
  subheaderTitle: 'Desde la Cartuja de Miraflores',
  introduction: {
    text: {
      firstParagraph:
        'Sobre una de las terrazas fluviales que escoltan la ciudad y rodeada de cuidados bosques, se alza la Cartuja de Miraflores, que data de finales del siglo XV y es uno de los monumentos más interesantes del gótico final europeo. Su sobria iglesia fue levantada para acoger los restos de Juan II de Castilla, padre de Isabel la Católica. Y también tiene mucha relación con la Catedral ya que en sus obras intervinieron varios de los artistas, en especial Simón de Colonia y Gil de Siloe, que a la vez estaban trabajando en distintas capillas catedralicias. Además, a menos de 200 metros de la Cartuja hay un improvisado mirador desde el que se identifica la silueta del primer templo burgalés.',
    },
    image: [photo1, photo2],
  },
  sections: [
    {
      title: 'Sobria y lujosa a la vez',
      bodyText:
        'Después de admirar el esbelto y sobrio exterior, impregnado por el ascetismo cartujo, hay que visitar su iglesia, de una sola y alargada nave cubierta con bóveda de crucería y compartimentada siguiendo los cánones habituales en un templo cartujano. Cuando en 1499 Gil de Siloe dejó definitivamente asentado el retablo mayor de la Cartuja, se completaba un espacio suntuoso que se convertiría en uno de los puntos de referencia del último gótico europeo. El original tema central de la composición del retablo gira en torno a una monumental Crucifixión.',
      image: [photo3, photo4, photo5],
    },
    {
      title: 'Sepulcros únicos',
      bodyText:
        'También son de excepcional categoría artística los sepulcros en alabastro de los reyes de Castilla Juan II e Isabel de Portugal y del infante Alfonso, labrados también por Gil de Siloe, que están situados en el centro de la cabecera de la iglesia. Con esta extraordinaria obra funeraria la reina Isabel la Católica, patrocinadora del monumento, quiso dignificar su linaje y recuperar el prestigio de la monarquía castellana. El recorrido continúa visitando una exposición en la que se recrea la historia y la vida de los cartujos burgaleses y el la que se puede admirar la magnífica Anunciación pintada por Pedro Berruguete.',
      image: [photo6, photo7, photo8],
    },
  ],
  nextSteps: {
    text:
      'A la Cartuja, que está un poco más lejos del centro se llega enlazando por el Bulevar del Ferrocarril, diseñado por los prestigiosos arquitectos Herzog & de Meuron. También caminando por las riberas del Arlanzón y los parques de La Quinta y Fuente del Prior.',
    nextMirador: '/huelgas',
  },
};

export default CARTUJA;
