import { Link } from 'react-router-dom';
import presentacion1 from '../../../assets/images/presentacion/presentacion-1.jpg';
import presentacion2 from '../../../assets/images/presentacion/presentacion-2.jpg';
import presentacion3 from '../../../assets/images/presentacion/presentacion-3.jpg';
import presentacion4 from '../../../assets/images/presentacion/presentacion-4.jpg';
import presentacion5 from '../../../assets/images/presentacion/presentacion-5.jpg';
import presentacion6 from '../../../assets/images/presentacion/presentacion-6.jpg';

const Home = () => {
  return (
    <div className="home">
      <div className="desktop-wrapper">
        <div className="home__presentation">
          <h4 className="home__sectionTitle">Un sentido aniversario</h4>
          <p className="home__presentationText">
            En Burgos estamos de aniversario y lo vamos a celebrar por todo lo
            alto. Y no es para menos ya que en 2021 se cumplen 800 años de la
            colocación de la primera piedra de nuestra Catedral. Todos sabemos
            que Burgos no sería Burgos sin esa maravillosa joya del arte gótico
            que se alza inconfundible sobre el perfil de esta histórica ciudad
            castellana. En tu mano tienes la herramienta para descubrir y
            disfrutar de los mejores miradores sobre este icono monumental,
            declarado Patrimonio de la Humanidad por la Unesco, y que está
            celebrando su VIII Centenario.
          </p>
          <img
            src={presentacion1}
            alt="Miradores"
            className="home__presentationImg"
          />
        </div>
        <div className="home__presentation">
          <h4 className="home__sectionTitle">
            Ocho miradores sobre la Catedral
          </h4>
          <p className="home__presentationText">
            Burgos es una urbe en la que por suerte reina la escala humana con
            la que fue concebida. Repleta de paseos, parques y jardines todavía
            es posible llegar caminando o en bicicleta a casi todos los enclaves
            importantes. Arquetipo de la ciudad de los 15 minutos, el recorrido
            que enlaza los ocho miradores ha sido diseñado para ser realizado a
            pie. Con las correspondientes paradas, para disfrutar de las vistas
            y de los demás hitos patrimoniales, hay que calcular unas tres horas
            de cómodo paseo.
          </p>
          <Link to="/miradores">
            <img
              src={presentacion2}
              alt="Miradores"
              className="home__presentationImg"
            />
          </Link>
        </div>
        <div className="home__presentation">
          <h4 className="home__sectionTitle">Desde Las Huelgas Reales</h4>
          <p className="home__presentationText">
            Este monasterio de monjas cistercienses fundado como panteón real en
            1187, está muy relacionado con la Catedral de Burgos ya que, además
            de los vínculos familiares entre los monarcas castellanos de la
            época, en su construcción se ensayaron muchas de las técnicas y
            soluciones artísticas que unos años después ayudarían a dar forma al
            principal templo burgalés.
          </p>
          <Link to="/huelgas">
            <img
              src={presentacion3}
              alt="Miradores"
              className="home__presentationImg"
            />
          </Link>
        </div>
        <div className="home__presentation">
          <h4 className="home__sectionTitle">Desde la Cartuja de Miraflores</h4>
          <p className="home__presentationText">
            Junto a Las Huelgas y la Catedral forma uno de los triángulos
            artísticos con mayor reconocimiento de España. El prestigio y la
            riqueza artística de la Cartuja de Miraflores, uno notable monumento
            del gótico final europeo, se deben a Isabel la Católica y su empeño
            en construir el más lujoso panteón para sus padres. En las obras
            intervinieron los mismos y geniales artistas que a finales del siglo
            XV estaban trabajando en la seo burgalesa.
          </p>
          <Link to="/cartuja">
            <img
              src={presentacion4}
              alt="Miradores"
              className="home__presentationImg"
            />
          </Link>
        </div>
        <div className="home__presentation">
          <h4 className="home__sectionTitle">
            Un paseo alrededor de la Catedral
          </h4>
          <p className="home__presentationText">
            En nuestros días se puede circunvalar caminando todo el exterior de
            la Catedral. En los 600 metros más intensos del arte gótico español
            descubriremos algunos de los elementos que nos ayudarán a comprender
            la importancia del monumento: hastial y puerta del Sarmental,
            cabecera, capilla del Condestable, puerta de la Pellejería, fachada
            de la Coronería y fachada Real o de Santa María.
          </p>
          <Link to="/exterior">
            <img
              src={presentacion5}
              alt="Miradores"
              className="home__presentationImg"
            />
          </Link>
        </div>
        <div className="home__presentation">
          <h4 className="home__sectionTitle">
            Los ocho imprescindibles de la Catedral
          </h4>
          <p className="home__presentationText">
            Hay que tener cuidado ya que en el interior de la Catedral es
            posible sentir los síntomas del ‘síndrome de Stendhal’. Es tanta la
            belleza acumulada a lo largo de los siglos, sobre todo después de
            las últimas restauraciones, que es muy difícil concentrar la mirada
            en un solo punto de interés. Para facilitar la visita os ofrecemos,
            aunque hay muchos más, los ocho enclaves imprescindibles.
          </p>
          <Link to="/interior">
            <img
              src={presentacion6}
              alt="Miradores"
              className="home__presentationImg"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
