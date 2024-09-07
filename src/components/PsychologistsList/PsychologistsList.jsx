import PsychologistsItem from "../PsychologistsItem/PsychologistsItem";

const PsychologistsList = ({ data }) => {
  return (
    <div>
      <ul>
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
