import { CodesandboxLogo, PlusCircle } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import { Task } from './Task'
import style from './TaskList.module.css'


export function TaskList(){
    

    const [tasks, setTasks] = useState([
        {
            id:0,
            content:'Conteudo da task',
            checked:false
        },
        {
            id:1,
            content:'Conteudo da task 2 ',
            checked:false
        },
        {
            id:2,
            content:'Conteudo da task 3',
            checked:false
        },
        {
            id:3,
            content:'Conteudo da task 3',
            checked:false
        }
    ])

    const [newTaskText, setNewTaskText ] = useState('');

    const [countTaks, setCountTasks] = useState(4);

    const [idTaks, setIdTaks] = useState(4);



    function handleCreateNewTask(){
        event?.preventDefault();
        
        setTasks([...tasks,{
            id:idTaks,
            content:newTaskText,
            checked:false
        }] )

        setNewTaskText('');
        setIdTaks(idTaks + 1);
        setCountTasks(countTaks + 1);
    }

    function handleNewTaskChange(event:ChangeEvent<HTMLInputElement>){
        setNewTaskText(event.target.value);
    }

    /*Deletar Task */

    function deleteTask(taskToDelete:number){
        const tasksWithoutDeleteOne = tasks.filter(task => {
            return task.id != taskToDelete;
        })
        setTasks(tasksWithoutDeleteOne);
        setCountTasks(countTaks - 1);
    }



    
    return(

    <div>

        <div className={style.inputTask}>
            <form 
                className={style.formTask}
                onSubmit={handleCreateNewTask}
                
            >
                <input 
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                    value={newTaskText}
                    onChange={handleNewTaskChange}
                    
                />
                <button type="submit">
                    Criar
                    <PlusCircle size={20}/>
                </button>
            </form>
        </div>

        <div className={style.taskList}>
            <div className={style.taskCount}>
                <div className={style.taskTotal}>
                    <p>Tarefas criadas</p>
                    <span className={style.taskTotalValue}>{countTaks}</span>
                </div>
                <div className={style.taskDone}>
                    <p>Concluídas</p>
                    <span className={style.taskDoneValue}>2 de {countTaks}</span>
                </div>
            </div>

            {tasks.map(task => {
                return(
                    <Task 
                        key={task.id}
                        id={task.id}
                        content={task.content}
                        checked={task.checked}
                        onDeleteTask={deleteTask}
                    />
                )
            })}

    
        </div>

    </div>
    )
}