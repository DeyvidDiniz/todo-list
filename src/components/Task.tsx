import { Trash, CheckCircle } from 'phosphor-react'
import style from './Task.module.css'
import * as Checkbox from '@radix-ui/react-checkbox';

interface TaskProps{
    id:number;
    content:string;
    checked:boolean;
    onDeleteTask:(task:number) => void;
    onTaskChanged:(id:number, checked:boolean) => void;
}


export function Task({id, content, checked, onDeleteTask, onTaskChanged}: TaskProps){

    function HandleDeleteTask(){
        onDeleteTask(id);
    }

    function handleVerifyChecked(){
        if(checked == false){
            checked = true;
        }else{
            checked =false;
        }
        onTaskChanged(id, checked);
    }

    
    return(

        <div>

            <div className={style.task}>
                <div className={style.taskContainer}>
                    <label>
                        <input type="checkbox"
                         onChange={handleVerifyChecked}
                         /> 
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