import React from 'react';
import Button from '../Botao';
import style from './Formulario.module.scss'

class Formulario extends React.Component{
    render(): React.ReactNode {
        return(
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione uma nova tarefa
                    </label>
                    <input                     
                    type="text" 
                    id="tarefa" 
                    className={style.tarefa}
                    placeholder='Qual será sua tarefa?'
                    required
                    />
                
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="">Tempo</label>
                    <input 
                    type="time"
                    step='1'
                    name='tempo'
                    id='tempo'
                    min="00:00:00"
                    max="01:30:00"
                    />
                </div>
                <Button/> 
                
            </form>
        )
    }
}

export default Formulario;