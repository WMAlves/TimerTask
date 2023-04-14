import React from 'react';
import Button from '../Botao';
import './style.scss'

class Formulario extends React.Component{
    render(): React.ReactNode {
        return(
            <form className="novaTarefa">
                <div className="inputContainer">
                    <label htmlFor="tarefa">
                        Adicione uma nova tarefa
                    </label>
                    <input                     
                    type="text" 
                    id="tarefa" 
                    className="tarefa"
                    placeholder='Qual será sua tarefa?'
                    required
                    />
                
                </div>
                <div className="inputContainer">
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