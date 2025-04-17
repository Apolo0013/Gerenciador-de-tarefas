import { useEffect, useState } from 'react'
import './botao.css'
//botao retulizavel

function Botao(props) {
    function Addstyle() {
        if (props.fun === 'add') { 
            setstyle('botao add')
        }
        else if (props.fun === 'del') {
            setstyle('botao delete')
        }
        else if (props.fun === 'ed') {
            setstyle('botao editar')
        }
    }

    const [stylebotao, setstyle] = useState()
    useEffect(() => {
        Addstyle()
    })
    return (
        <div className={stylebotao} onClick={props.funClick}>
            {props.nome}
        </div>
    )
}

export default Botao