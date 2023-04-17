import React from 'react';
import style from "./Botao.module.scss"

class Button extends React.Component{
    render(): React.ReactNode {
        
        
        return(
            <button className={style.botao}>
                BOTÃO
            </button>
        )
    }
}
export default Button;



