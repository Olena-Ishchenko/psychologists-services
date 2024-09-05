import icons from "../../assets/sprite.svg";
import photo1x from "../../assets/image-1x.jpg";
import photo2x from "../../assets/image-2x.jpg";
import photo1xwp from "../../assets/image-1x-webp.webp";
import photo2xwp from "../../assets/image-2x-webp.webp";
import styles from "./WelcomeSection.module.css";

const WelcomeSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.welcomeText}>
          <div>
            <h1 className={styles.title}>
              The road to the
              <span className={styles.titleColor}> depths </span>
              of the human soul
            </h1>
            <p className={styles.text}>
              We help you to reveal your potential, overcome challenges and find
              a guide in your own life with the help of our experienced
              psychologists.
            </p>
            <button className={styles.startBtn} type="button">
              Get started
              <svg className={styles.iconBtn} width={15} height={17}>
                <use href={`${icons}#icon-arrow`}></use>
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <picture>
            <source
              type="image/webp"
              srcSet={(`${photo1xwp} 1x`, `${photo2xwp} 2x`)}
            />
            <source
              type="image/jpeg"
              srcSet={(`${photo1x} 1x`, `${photo2x} 2x`)}
            />
            <img src={`${photo1x}`} />
          </picture>
          <div className={styles.iconUsers}>
            <svg className={styles.iconImg} width={25} height={25}>
              <use href={`${icons}#icon-users`}></use>
            </svg>
          </div>
          <div className={styles.iconQuestion}>
            <svg className={styles.iconImg} width={10} height={17}>
              <use href={`${icons}#icon-question`}></use>
            </svg>
          </div>
          <div className={styles.imgTextContainer}>
            <div className={styles.iconCheckContainer}>
              <svg className={styles.iconCheck} width={30} height={30}>
                <use href={`${icons}#icon-check`}></use>
              </svg>
            </div>
            <div>
              <p className={styles.imgText}>Experienced psychologists</p>
              <p className={styles.imgTextCount}>15,000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeSection;
