import '../Deletar/index.scss';
import Header from "../../components/Header/Header.jsx";
import Delete from '../../components/Delete/Delete.jsx';
import { useParams } from "react-router-dom";


const Deletar = ({data}) => {
  const {tarefaId} = useParams();
  const selectTarefa = data.find(tarefa => tarefa.id == tarefaId);

  return (
    <div className="Deletar">
        <Header/>

        <Delete data={selectTarefa}/>
    </div>
  )
}

export default Deletar