import icons from "../../assets/sprite.svg";

const PsychologistsItem = ({ psychologist, handleFavoriteBtn, openModal }) => {
  return (
    <>
      <div>
        <img
          src={psychologist.avatar_url}
          alt="psychologist photo"
          width="96"
          loading="lazy"
        />
      </div>
      <div>
        <div>
          <p>Psychologist</p>
          <h2>{psychologist.name}</h2>
        </div>
        <div>
          <svg width={16} height={16}>
            <use href={`${icons}#icon-star`}></use>
          </svg>
          <p>Rating: {psychologist.rating}</p>
          <p>Price/ 1 hour: {psychologist.price_per_hour}$</p>
          <button onClick={() => handleFavoriteBtn(psychologist.id)}>
            <svg width={26} height={26}>
              <use href={`${icons}#icon-heart`}></use>
            </svg>
          </button>
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
        <button type="submit" onClick={() => openModal(psychologist.id)}>
          Read more
        </button>
      </div>
    </>
  );
};

export default PsychologistsItem;
