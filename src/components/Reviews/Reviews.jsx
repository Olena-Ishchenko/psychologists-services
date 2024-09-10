import icons from "../../assets/sprite.svg";

const Reviews = ({ reviews }) => {
  return (
    <div>
      <ul>
        {reviews.reviews.map((review) => (
          <li key={review.reviewer}>
            <div>
              <div>{review.reviewer.slice(0, 1)}</div>
            </div>
            <h4>{review.reviewer}</h4>
            <div>
              <svg width={16} height={16}>
                <use href={`${icons}#icon-star`}></use>
              </svg>
              <p>{review.rating}</p>
            </div>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => {
          console.log("appointment");
        }}
      >
        Make an appointment
      </button>
    </div>
  );
};

export default Reviews;
