import { Trash, CheckCircle } from 'phosphor-react'
import style from './Task.module.css'
import * as Checkbox from '@radix-ui/react-checkbox';

interface TaskProps{
    id:number;
    content:string;
    checked:boolean;
    onDeleteTask:(task:number) => void;
}


export function Task({id, content, checked, onDeleteTask}: TaskProps){

    function HandleDeleteTask(){
        onDeleteTask(id);
    }

    
    return(

        <div>

            <div className={style.task}>
                <div className={style.taskContainer}>
                    <label>
                        <input type="checkbox" /> 
                        <span></span>
                        <p>{content}</p>
                    </label>
                </div>
                <button onClick={HandleDeleteTask}>
                    <Trash size={14} />
                </button>
            </div>


        </div>

        

        
    )
}