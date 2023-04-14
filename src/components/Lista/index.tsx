import React from 'react';
import "./style.scss"

function Lista() {
    
    //lista de tarefas a serem adicionadas
    const tarefas = [{
        tarefas: 'React',
        tempo: '02:00:00'
    },
    {
        tarefas:'Typescript',
        tempo:'01:00:00'

    },
    {
        tarefas:'Banco de Dados',
        tempo:'01:30:00'
    }
    ]
    //fim das tarefas

    //oque oa lista irá retornar.
    return (
        <aside className='listaTarefas'>
            <h2>Estudo do dia</h2>
            <ul>
                {tarefas.map((item,index)=>(                    //Posso chamar a lista de tarefas aqui usando "{}". Para o React é necessário usar o "index" no map por ser um renderização dinamica
                    <li   key={index} className='item'>
                        <h3>{item.tarefas}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}                
            </ul>

        </aside>
    )
}

export default Lista;