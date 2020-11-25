import photo1 from '../../assets/images/exterior/exterior-1.jpg';
import photo2 from '../../assets/images/exterior/exterior-2.jpg';
import photo3 from '../../assets/images/exterior/exterior-3.jpg';
import photo4 from '../../assets/images/exterior/exterior-4.jpg';
import photo5 from '../../assets/images/exterior/exterior-5a.jpg';
import photo6 from '../../assets/images/exterior/exterior-5b.jpg';
import photo7 from '../../assets/images/exterior/exterior-6.jpg';

const EXTERIOR = {
  subheaderTitle: 'Un paseo alrededor de la catedral',
  introduction: {
    text: {
      firstParagraph:
        'En la grandeza de un monumento no solo influye el conjunto de obras artísticas que configuran su estructura y contenido, además hay que tener en cuenta su integración espacial con el medio que lo rodea. Este es caso de la Catedral de Burgos que ve incrementado su valor estético por el contraste que se establece entre su preminente volumen arquitectónico y la trama urbana que se extiende a sus pies. Este paseo de descubrimiento discurre por todas las calles y plazas que rodean la basílica: los 600 metros más intensos del gótico español.',
    },
    image: [photo1],
  },
  sections: [
    {
      title: 'Plaza del Rey San Fernando',
      bodyText:
        'Desde la despejada plaza del Rey San Fernando se disfruta la más completa panorámica de la fachada meridional de la Catedral. Una buena idea es sentarse en uno de sus bancos y deleitarse con el insuperable juego de volúmenes existente entre las torres, rematadas por unos puntiagudos chapiteles, la alargada nave central, el ya renacentista cimborrio y el elegante hastial del Sarmental.',
      image: [photo2],
    },
    {
      title: 'Portada del Sarmental',
      bodyText:
        'Iniciado hacia 1230, es el más antiguo de la basílica y conforma uno de los mejores conjuntos escultóricos en piedra del siglo XIII español. Destaca el Pantocrátor rodeado por la representación de los evangelistas de la puerta del Sarmental y, en los cuerpos superiores, el rosetón con vidrieras originales góticas y la galería calada del remate.',
      image: [photo3],
    },
    {
      title: 'Capilla del Condestable y Portada de la Pellejería',
      bodyText:
        'El paseo prosigue hacia la derecha por las estrechas calles de la Paloma y Diego Porcelos, que permiten acceder hasta la rehabilitada Llana de Afuera y descubrir el inconfundible perfil de la Capilla del Condestable —una catedral pegada a la Catedral— y la puerta de la Pellejería, en la que se dieron los primeros pasos del renacimiento burgalés. Después hay que tomar la bien trazada escalera que ascienden hasta la calle Fernán González y su mirador sobre la espectacular cabecera de la Catedral. Quizá el mejor lugar para apreciar el desnivel existente entre los distintos elementos del templo.',
      image: [photo4],
    },
    {
      title: 'Fachada de la Coronería',
      bodyText:
        'La calle de Fernán González, por la que discurre el Camino de Santiago y se solapan los dos Patrimonios de la Humanidad de los que presume Burgos, pasa bajo la fachada de la Coronería. Aunque de menor desarrollo por haberse adaptado al desnivel topográfico cuenta también con tres cuerpos rematados por una galería calada adornada con estatuas. Su portada, en la que destaca una elegante representación del Juicio Final, ha sido fechada hacia 1250.',
      image: [photo5, photo6],
    },
    {
      title: 'Fachada Real',
      bodyText:
        'Dejando atrás el palacio de Castilfalé enseguida se alcanza la iglesia de San Nicolás y la impactante vista de la fachada Real, concluida durante la segunda mitad del siglo XIII y una de las imágenes con mayor personalidad del arte gótico. Su cuerpo central presenta un amplio rosetón rematado por una elegante crestería, sobre el que se alzan las torres y los chapiteles diseñados por Juan de Colonia en el siglo XV.',
      image: [photo7],
    },
  ],
  nextSteps: {
    text: '',
    nextMirador: '/interior',
  },
};

export default EXTERIOR;
