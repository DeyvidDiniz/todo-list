import style from './Header.module.css'
import Logo from '../assets/LogoTodo.svg'


export function Header(){
    return(
        <header>
        <div className={style.container}>
          <img src={Logo}/>
        </div>
    </header>
    )
}