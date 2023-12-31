import '../Editar/index.scss';
import Header from "../../components/Header/Header.jsx";
import Edit from '../../components/Edit/Edit.jsx';
import { useParams } from "react-router-dom";

const Editar = ({data}) => {
  const {editarId} = useParams();
  const selectedTarefa = data.find(tarefa => tarefa.id == editarId);
  console.log(selectedTarefa);
  
  return (
    <div className="Editar">
      <Header/>
      <div className='editar__modal'>
      <Edit data={selectedTarefa}/>
      </div>
    </div>
  )
}

export default Editar