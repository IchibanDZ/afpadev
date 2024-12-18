import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const Data = [
  { id: 'todo-0', name: 'Manger', completed: true },
  { id: 'todo-1', name: 'Dormir', completed: false },
  { id: 'todo-2', name: 'Recommencer', completed: false },
    ];
    console.table(Data);

    const FilterBtn = [
      { id: 'filter-0', name: 'Toutes' },
      { id: 'filter-1', name: 'En cours' },
      { id: 'filter-2', name: 'Terminées' },

    ]

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <App tasks={Data} filter={FilterBtn} />
  </StrictMode>,
)
