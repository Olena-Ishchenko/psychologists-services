import icons from "../../assets/sprite.svg";
import styles from "./PsychologistsItem.module.css";

const PsychologistsItem = ({ psychologist }) => {
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
            <svg width={16} height={16}>
              <use href={`${icons}#icon-star`}></use>
            </svg>
            <p>Rating: {psychologist.rating}</p>
            <p>Price/ 1 hour: {psychologist.price_per_hour}$</p>
            <button onClick={() => console.log("favorites")}>
              <svg width={26} height={26}>
                <use href={`${icons}#icon-heart`}></use>
              </svg>
            </button>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <p>
                Experince: <span>{psychologist.experience}</span>
              </p>
            </li>
            <li>
              <p>
                License: <span>{psychologist.license}</span>
              </p>
            </li>
            <li>
              <p>
                Specialization: <span>{psychologist.specialization}</span>
              </p>
            </li>
            <li>
              <p>
                Initial_consultation:{" "}
                <span>{psychologist.initial_consultation}</span>
              </p>
            </li>
          </ul>
          <p>{psychologist.about}</p>
        </div>
        <button type="submit" onClick={() => console.log("modal")}>
          Read more
        </button>
      </div>
    </div>
  );
};

export default PsychologistsItem;
