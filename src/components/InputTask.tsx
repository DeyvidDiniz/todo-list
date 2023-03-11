import style from './InputTask.module.css';
import {PlusCircle } from 'phosphor-react'

export function InputTask(){
    return(
        <div className={style.inputTask}>
            <form className={style.formTask}>
                <input 
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                />
                <button type="submit">
                    Criar
                    <PlusCircle size={20}/>
                    </button>
            </form>
        </div>
    )
}