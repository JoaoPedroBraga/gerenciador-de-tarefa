import '../Home/index.scss';
import Header from "../../components/Header/Header.jsx";
import Tarefas from "../../components/Tarefas/Tarefas.jsx";
import Add from '../../assets/Add.svg'

const Home = ({data}) => {
  
  return (
    <div className="Home">
      <Header/>
      <div className='home__conteudo'>
        <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
        <div className='home__cabecalho'>
         <h3>Tarefa</h3>
          <h3>Status</h3>
         <h3>Opções</h3>
        </div>
        <div className='home__tarefas'>
          {data.map((tarefa)=> 
            (<Tarefas key={tarefa.id} data={tarefa}/>
          ))}
        </div>
        <div className="home__add">
            <input type="text" placeholder='Nova tarefa...'/>
            
            <img className='add__btn' src={Add} alt="Adicinar" />
        </div>
      </div>
    </div>
  );
}
export default Home