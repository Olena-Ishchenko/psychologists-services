import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPsychologists } from "../../redux/psychologists/operations";
import PsychologistsList from "../../components/PsychologistsList/PsychologistsList";
import {
  selectPsychologists,
  // selectItemById,
} from "../../redux/psychologists/selectors";
// import ModalContainer from "../../components/ModalContainer/ModalContainer";

export default function PsychologistsPage() {
  const dispatch = useDispatch();
  const data = useSelector(selectPsychologists);
  // const itemById = useSelector(selectItemById);

  // const openModal = itemById !== null;

  // function handleModal(id) {
  //   dispatch(setItemById(id));
  // }

  useEffect(() => {
    dispatch(fetchPsychologists());
  }, [dispatch]);

  return (
    <div>
      <PsychologistsList
        data={data}
        // openModal={handleModal}
      />

      {/* {itemById && <ModalContainer />} */}
    </div>
  );
}
