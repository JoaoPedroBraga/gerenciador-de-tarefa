import '../Tarefas/index.scss'
import { Link } from 'react-router-dom'
import Editar from '../../assets/editar.svg';
import Lixeira from '../../assets/lixeira.svg';


function Tarefas({data}) {
    console.log(data);
  return (
    <section className='Tarefas'>
      <p className='p-title'>{data.title}</p>
      <p><input type="checkbox" /></p>
      <p><Link to={`/editar/${data.id}`}><img src={Editar} alt="" /></Link> <Link to={`/deletar/${data.id}`}><img src={Lixeira} alt="" /></Link> </p>
    </section>
  )
}

export default Tarefas