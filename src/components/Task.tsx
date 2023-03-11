import { Trash, CheckCircle } from 'phosphor-react'
import style from './Task.module.css'
import * as Checkbox from '@radix-ui/react-checkbox';

export function Task(){
function teste(){
    console.log('teste')
}

    return(

        <div>

            <div className={style.task}>
                <div className={style.taskContainer}>
                    <label>
                        <input type="checkbox" /> 
                        <span></span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo beatae velit, eum nulla iure ab sint veritatis sunt maxime enim.</p>
                    </label>
                </div>
                <button >
                    <Trash size={14} />
                </button>
            </div>

            <div className={style.task}>
                <div className={style.taskContainer}>
                    <label>
                        <input type="checkbox" /> 
                        <span></span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo beatae velit, eum nulla iure ab sint veritatis sunt maxime enim.</p>
                    </label>
                </div>
                <button >
                    <Trash size={14} />
                </button>
            </div>

            <div className={style.task}>
                <div className={style.taskContainer}>
                    <label>
                        <input type="checkbox" /> 
                        <span></span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo beatae velit, eum nulla iure ab sint veritatis sunt maxime enim.</p>
                    </label>
                </div>
                <button >
                    <Trash size={14} />
                </button>
            </div>


        </div>

        

        
    )
}