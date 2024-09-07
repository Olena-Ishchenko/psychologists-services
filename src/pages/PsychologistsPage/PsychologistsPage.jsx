import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPsychologists } from "../../redux/psychologists/operations";
import PsychologistsList from "../../components/PsychologistsList/PsychologistsList";
import { selectPsychologists } from "../../redux/psychologists/selectors";

export default function PsychologistsPage() {
  const dispatch = useDispatch();
  const data = useSelector(selectPsychologists);

  useEffect(() => {
    dispatch(fetchPsychologists());
  }, [dispatch]);

  return <div>{<PsychologistsList data={data} />}</div>;
}
