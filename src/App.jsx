import { useRef, useState } from 'react';
import './App.css';
//compenentes
import Botao from './componentes/botao.jsx'
import Card from './componentes/cardt.jsx'
//Funcoes Botoes
import FunAdd from './componentes/Botao_Funcoes/Add.jsx'

function App() {
    /*
    {
        "id": 1,
        "titulo": "Estudar matemática",
        "descricao": "Revisar raiz quadrada e fatoração",
        "data_criacao": "2025-04-13",
        "prazo": "2025-04-14",
        "prioridade": "alta",
        "status": "pendente",
        "concluida": false,
        "categoria": "estudos"
    }

    */
    
    function Add() {
        function Onder(dic) {
            function Range(start = 1, end) {
                let list = []
                for (let i = start; i <= end; i++) {
                    list.push(i)
                }
                return list
            }
        
        
            let listaNew = []
            console.log(Range(dic.length - 1))
            const ListOrde = Range(1 , dic.length)
            let indexList = 0
            let index = 0
            while (true) {
                if (dic[index].id === ListOrde[indexList]) {
                    listaNew.push(dic[index])
                    indexList++
                    if (indexList === ListOrde.length) {
                        break
                    }
                }
                console.log(index)
                index ++
                if (index === dic.length) {
                    index = 0
                }
            }
            return listaNew
        }

        const infotemp = {
            id: id.current,
            date: {
                "titulo": "Estudar matemática",
                "descricao": "Revisar raiz quadrada e fatoração",
                "data_criacao": "2025-04-13",
                "prazo": "2025-04-14",
                "prioridade": "alta",
                "status": "pendente",
                "concluida": id.current % 2 === 0,
                "categoria": "estudos"
        }}
        const ListTemp = [...Tarefas, infotemp]
        const Lista = Onder(ListTemp)
        
        SetListCard(Lista)
        id.current ++
    }

    const [Tarefas, SetListCard] = useState([])
    const id = useRef(1)
    

    return (
        <div className="App">
            <header className="header">
                <h1>Gereciador de Tarefas</h1>
                <div>
                    <Botao nome="Adicionar" fun="add" funClick={Add} />        
                    <Botao nome="Editar" fun="del"/>        
                    <Botao nome="Remover" fun="ed"/>        
                </div>
            </header>
            <div className="tarefas">
                <div className="headtarefas">
                    <div>Indice</div>
                    <div>Nome da Tarefas</div>
                    <div className="feito">Concluido</div>

                </div>
                {Tarefas.map((info) => (
                    <Card info={info}  key={info.id}></Card>
                )) }
            </div>

            <FunAdd></FunAdd>
        </div>
    )
}

export default App;
