import styles from './App.module.css'
import { Header } from './components/Header'
import { InputTask } from './components/InputTask'
import { TaskList } from './components/TaskList'



export function App() {

  return (
    <div>
      <Header/>
      <InputTask/>
      <TaskList/>
    </div>
  )
}


