import { Trash, CheckCircle } from 'phosphor-react'
import style from './Task.module.css'
import * as Checkbox from '@radix-ui/react-checkbox';

interface TaskProps{
    id?:number;
    content:string;
    checked:boolean;
}


export function Task({content, checked}: TaskProps){

    

   
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
                <button >
                    <Trash size={14} />
                </button>
            </div>


        </div>

        

        
    )
}