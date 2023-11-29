import '../Delete/index.scss';
import { Link } from 'react-router-dom'

function Delete({data}) {
  
  return (
    <section className='Delete'>
        <h2>Deseja excluir esse item?</h2>
        <p>{data.description}</p>
        <div className='buttons'>
            <Link to={"/"}><button className='active' >NÃO</button></Link>
            <Link to={"/"}><button className='active' >SIM</button></Link>
        </div>

    </section>
  )
}

export default Delete