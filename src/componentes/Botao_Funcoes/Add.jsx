import { useEffect, useRef} from 'react'
import './Add.css'

function Add(props) {
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
    
    function ErrorLimiteLength(input, max, target) {
        if (target === 'titulo') {
            if (input.target.value.length >= max) {
                AlertErrorTitulo.current.classList.add('Error')
                AlertErrorTitulo.current.classList.remove('alert')
            }
            else {
                AlertErrorTitulo.current.classList.add('alert')
                AlertErrorTitulo.current.classList.remove('Error')
            }
        }
        else if (target === 'des') {
            if (input.target.value.length >= 240) {
                AlertErrorDes.current.classList.add('Error')
                AlertErrorDes.current.classList.remove('alert')
            }
            else {
                AlertErrorDes.current.classList.add('alert')
                AlertErrorDes.current.classList.remove('Error')
            }
        }
    }

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

    //ref botoes
    const botaobaixo = useRef()
    const botaomedia = useRef()
    const botaoalto = useRef()
    //ref inpust error
    const AlertErrorTitulo = useRef() // ref do input do Titulo
    const AlertErrorDes = useRef() // ref do input descrição

    useEffect(() => {
        props.desfoque()
    })

    return (
        <div className="AddConteiner">
            <div className="Titulo_add">
                <h3 className="h3TitAdd">Nome do Titulo da Tarefas</h3>
                <p className="alert" ref={AlertErrorTitulo}>O título não pode exceder o limite de caracteres permitido. 30 no maximo.</p>
                <input type="text" maxLength={50} onInput={(e) => ErrorLimiteLength(e, 50, 'titulo')}/>
            </div>
            <div className="descricao_add">
                <h3 className="h3TitAdd">Descrição da Tarefa pae</h3>
                <p className="alert" ref={AlertErrorDes}>A descrição ultrapassou o número máximo de caracteres. 240 no maximo </p>
                <textarea row="10" cols="40" maxLength="240" onInput={(e) => ErrorLimiteLength(e, 240, 'des')}></textarea>
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
                    <input type="text" maxLength={40} />
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
            <div className="Salva">
                <span>Salva</span>
            </div>
        </div>
    )
}

export default Add