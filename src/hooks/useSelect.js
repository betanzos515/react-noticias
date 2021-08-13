import { useState } from "react"

export const useSelect = ( stateInicial, opciones )=>{

    const [ state, guardarState ] = useState(stateInicial);
    const handleSelect = e =>{
        guardarState(e.target.value);
    }
    const SelectNoticias = ()=>(
        <select 
            className='browser-default'
            value={state}
            onChange={handleSelect}
        >
            {
                opciones.map(opcion=>(
                    <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                ))
            }
        </select>
    )

    return [ state, SelectNoticias ];
}