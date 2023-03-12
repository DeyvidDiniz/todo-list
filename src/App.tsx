import styles from './App.module.css'
import { Header } from './components/Header'
import { TaskList } from './components/TaskList'



export function App() {

  return (
    <div>
      <Header/>
      <TaskList/>
    </div>
  )
}


