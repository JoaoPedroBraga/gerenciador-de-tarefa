import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.scss'
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import Home from '../src/Views/Home/Home.jsx'
import Deletar from '../src/Views/Deletar/Deletar.jsx'
import Editar from '../src/Views/Editar/Editar.jsx'
import {LISTA_TAREFAS} from '../src/mock/listaTarefas.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data={LISTA_TAREFAS}/>,
  },
  {
    path: "/deletar/:tarefaId",
    element: <Deletar data={LISTA_TAREFAS}/>,
  },
  {
    path: "/editar/:editarId",
    element: <Editar data={LISTA_TAREFAS}/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
