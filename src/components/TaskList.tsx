import { Task } from './Task'
import style from './TaskList.module.css'

export function TaskList(){
    return(

    <div className={style.taskList}>
        <div className={style.taskCount}>
            <div className={style.taskTotal}>
                <p>Tarefas criadas</p>
                <span className={style.taskTotalValue}>02</span>
            </div>
            <div className={style.taskDone}>
                <p>Concluídas</p>
                <span className={style.taskDoneValue}>2 de 5</span>
            </div>
        </div>

        <Task />

    </div>


    )
}