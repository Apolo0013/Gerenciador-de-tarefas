import { useEffect, useState } from 'react'
import './cardt.css'

function CardTarefas(props) {
    function Concluida() {
        let feito = props.info.concluida
        if (feito) {    
            setConSi('Sim')
            setSit('feito simfeito')
        }
        else {
            setConSi('Não')
            setSit('feito nofeito')
        }
    }

    const [stylesituação, setSit] = useState()
    const [conteudositua, setConSi] = useState()

    useEffect(() => {
        Concluida()
    })

    return (
        <div className="card">
            <div className="index">{ props.info.id }</div>
            <div className="nome">{ props.info.date.titulo }</div>
            <div className={stylesituação}> { conteudositua }</div>
        </div>
    )
}

export default CardTarefas