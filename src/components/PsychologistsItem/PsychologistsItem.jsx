import icons from "../../assets/sprite.svg";
import styles from "./PsychologistsItem.module.css";

const PsychologistsItem = ({ psychologist, openModal }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.photoContainer}>
        <img
          className={styles.photo}
          src={psychologist.avatar_url}
          alt="psychologist photo"
          width="96"
          loading="lazy"
        />
      </div>
      <div>
        <div className={styles.nameContainer}>
          <div>
            <p className={styles.psy}>Psychologist</p>
            <h2 className={styles.name}>{psychologist.name}</h2>
          </div>
          <div className={styles.ratingContainer}>
            <svg className={styles.iconStar} width={16} height={16}>
              <use href={`${icons}#icon-star`}></use>
            </svg>

            <p className={styles.rating}>Rating: {psychologist.rating}</p>
            <p className={styles.priceText}>
              Price/ 1 hour:{" "}
              <span className={styles.price}>
                {" "}
                {psychologist.price_per_hour}$
              </span>
            </p>
            <button
              className={styles.favoriteBtn}
              onClick={() => console.log("favorites")}
            >
              <svg className={styles.iconHeart} width={26} height={26}>
                <use href={`${icons}#icon-heart`}></use>
              </svg>
            </button>
          </div>
        </div>
        <div>
          <ul className={styles.descrList}>
            <li className={styles.descrItem}>
              <p className={styles.descr}>
                Experince:{" "}
                <span className={styles.descrDetails}>
                  {psychologist.experience}
                </span>
              </p>
            </li>
            <li className={styles.descrItem}>
              <p className={styles.descr}>
                License:{" "}
                <span className={styles.descrDetails}>
                  {psychologist.license}
                </span>
              </p>
            </li>
            <li className={styles.descrItem}>
              <p className={styles.descr}>
                Specialization:{" "}
                <span className={styles.descrDetails}>
                  {psychologist.specialization}
                </span>
              </p>
            </li>
            <li className={styles.descrItem}>
              <p className={styles.descr}>
                Initial_consultation:{" "}
                <span className={styles.descrDetails}>
                  {psychologist.initial_consultation}
                </span>
              </p>
            </li>
          </ul>
          <p className={styles.aboutText}>{psychologist.about}</p>
        </div>
        <button
          className={styles.moreBtn}
          type="submit"
          onClick={() => openModal(psychologist.id)}
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default PsychologistsItem;
