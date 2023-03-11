import { Trash } from 'phosphor-react'
import style from './Task.module.css'

export function Task(){
    return(
        <div>

        <div className={style.task}>
            <div className={style.taskContainer}>
                <input type="checkbox"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo beatae velit, eum nulla iure ab sint veritatis sunt maxime enim.</p>
            </div>
            <Trash size={14}/>
        </div>

        <div className={style.task}>
            <div className={style.taskContainer}>
                <input type="checkbox"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo beatae velit, eum nulla iure ab sint veritatis sunt maxime enim.</p>
            </div>
            <Trash size={14}/>
        </div>

        <div className={style.task}>
            <div className={style.taskContainer}>
                <input type="checkbox"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo beatae velit, eum nulla iure ab sint veritatis sunt maxime enim.</p>
            </div>
            <Trash size={14}/>
        </div>

        <div className={style.task}>
            <div className={style.taskContainer}>
                <input type="checkbox"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo beatae velit, eum nulla iure ab sint veritatis sunt maxime enim.</p>
            </div>
            <Trash size={14}/>
        </div>

        <div className={style.task}>
            <div className={style.taskContainer}>
                <input type="checkbox"/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo beatae velit, eum nulla iure ab sint veritatis sunt maxime enim.</p>
            </div>
            <Trash size={14}/>
        </div>

        </div>

        

        
    )
}