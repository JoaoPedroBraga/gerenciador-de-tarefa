import '../Home/index.scss';
import Header from "../../components/Header/Header.jsx";
import Tarefas from "../../components/Tarefas/Tarefas.jsx";
// import Delete from '../../components/Delete/Delete.jsx';
// import Edit from '../../components/Edit/Edit.jsx';


const Home = ({data}) => {
  
  return (
      <div className="Home">
        <Header/>
        <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>

        <div className='home__tarefas'>
          {data.map((tarefa)=> 
              (<Tarefas key={tarefa.id} data={tarefa}/>
            ))}
        </div>
        
      </div>
  );
}
export default Home