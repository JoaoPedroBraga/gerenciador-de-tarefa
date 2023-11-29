import '../Delete/index.scss';
import { Link } from 'react-router-dom'

function Edit({data}) {
  return (
    <section className='Delete'>
      <h2>Deseja editar esse item?</h2>
      <p>{data.description}</p>
      <div className='buttons'>
        <Link to={"/"}><button className='active' >NÃO</button></Link>
        <Link to={"/"}><button className='active' >SIM</button></Link>
      </div>

    </section>
  )
}

export default Edit