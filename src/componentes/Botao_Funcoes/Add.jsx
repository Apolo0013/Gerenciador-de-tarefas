import { useRef, useState } from 'react'
import './Add.css'

function Add() {
    /*
    {
        "id": 1,
        "titulo": "Estudar matemática", //
        "descricao": "Revisar raiz quadrada e fatoração", //
        "data_criacao": "2025-04-13"
        "prazo": "2025-04-14",
        "prioridade": "alta", //
        "status": "pendente",
        "concluida": false, 
        "categoria": "estudos" //
    }
    */
    
    function AddStyleFocusBotao(botao) {
        let button  = null
        if (botao === 'baixo') {
            botaoalto.current.classList.remove('focus-Botao')
            botaomedia.current.classList.remove('focus-Botao')
            button = botaobaixo
        }
        else if (botao === 'media') {
            botaobaixo.current.classList.remove('focus-Botao')
            botaoalto.current.classList.remove('focus-Botao')
            button = botaomedia
        }
        else if (botao === 'alta') {
            botaobaixo.current.classList.remove('focus-Botao')
            botaomedia.current.classList.remove('focus-Botao')
            button = botaoalto
        }

        button.current.classList.add('focus-Botao')
    }
    
    const botaobaixo = useRef()
    const botaomedia = useRef()
    const botaoalto = useRef()

    return (
        <div className="AddConteiner">
            <div className="Titulo_add">
                <h3 className="h3TitAdd">Nome do Titulo da Tarefas</h3>
                <input type="text" maxLength={25} />
            </div>
            <div className="descricao_add">
                <h3 className="h3TitAdd">Descrição da Tarefa pae</h3>
                <textarea row="10" cols="40" maxLength="240"></textarea>
            </div>
            <div className="prioridade_add">
                <h3 className="h3TitAdd h3Pro">Prioridade</h3>
                <button ref={botaobaixo} onClick={() => AddStyleFocusBotao('baixo')}>Baixa</button>
                <button ref={botaomedia} onClick={() => AddStyleFocusBotao('media')}>Media</button>
                <button ref={botaoalto} onClick={() => AddStyleFocusBotao('alta')}>Alta</button>
            </div>
            <div className="Categoria_add">
                <h3 className="h3TitAdd">Categoria</h3>
                <div>
                    <input type="text" />
                    <p>Categorias Anteriores</p>
                    <select ref={null}>
                        <option value="">categoria1</option>
                        <option value="">categoria2</option>
                        <option value="">categoria3</option>
                        <option value="">categoria1</option>
                        <option value="">categoria2</option>
                        <option value="">categoria3</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Add