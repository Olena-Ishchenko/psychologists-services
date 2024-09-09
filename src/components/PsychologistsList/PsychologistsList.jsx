import PsychologistsItem from "../PsychologistsItem/PsychologistsItem";
import styles from "./PsychologistsList.module.css";

const PsychologistsList = ({ data }) => {
  return (
    <div className={styles.listContainer}>
      <ul className={styles.psychologistList}>
        {data.map((psychologist) => (
          <li key={psychologist.id}>
            <PsychologistsItem psychologist={psychologist} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PsychologistsList;
