
import { useParams, Navigate } from "react-router-dom";
import DataLocation from "../../logements.json";
import Collapse from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag/Tag";
import Rating from "../../components/Rating/Rating";
import Host from "../../components/Host/Host";
import Slide from "../../components/Slider/Slider";


const Logement = () => {
  /* Récupère la bonne fiche */
  const { id } = useParams();

  const logement = DataLocation.find((logement) => logement.id === id);

  /* Tags */
  const tagsLogement = logement?.tags.map((tags, i) => {
    return <Tag key={i} nom={tags} />;
  });

  /* Équipements */
  const equipements = logement?.equipments.map((equipment, i) => {
    return (
      <ul key={i}>
        <li>{equipment}</li>
      </ul>
    );
  });

  return (
    <main>
      {logement ? (
        <div>
          <Slide slides={logement?.pictures} />
          <section className="locations">
            <div className="description-info">
              <div className="description-info__titletags">
                <div className="description-info__titletags__title">
                  <span className="titre-logement">{logement?.title}</span>
                  <span className="lieu-logement">
                    {logement?.location}
                  </span>
                </div>
                {/* Tags */}
                <div className="description-info__titletags__tags">
                  {tagsLogement}
                </div>
              </div>

              <div className="description-info__proprietaire">
                {/* Host */}
                <div className="description-info__proprietaire__nom-prop">
                  <Host
                    name={logement?.host.name}
                    picture={logement?.host.picture}
                  />
                </div>
                {/* Rating */}
                <div className="description-info__proprietaire__rate">
                  <Rating score={logement.rating} />
                </div>
              </div>
            </div>

          </section>
          {/* Collapse */}
          <div className="description-content">
            <div className="description-content__description">
              <Collapse
                title="Description"
                content={logement?.description}
              />
            </div>
            <div className="description-content__equipement">
              <Collapse title="Équipements" content={equipements} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
    </main>
  );
};

export default Logement;
