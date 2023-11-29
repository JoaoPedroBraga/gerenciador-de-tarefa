import '../Tarefas/index.scss'
import { Link } from 'react-router-dom'
import Editar from '../../assets/editar.svg';
import Lixeira from '../../assets/lixeira.svg';
// import Add from '../../assets/add.svg';

function Tarefas({data}) {
    console.log(data);
  return (
    <section className='Tarefas'>

        <div className='info'>
            <td className='td-title'>{data.title}</td>
            <td><input type="checkbox" /></td>
            <td><Link to={`/editar/${data.id}`}><img src={Editar} alt="" /></Link> <Link to={`/deletar/${data.id}`}><img src={Lixeira} alt="" /></Link> </td>

        </div>
      
    </section>
  )
}

export default Tarefas