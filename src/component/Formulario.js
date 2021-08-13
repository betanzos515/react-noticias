import React from 'react'
import { useSelect } from '../hooks/useSelect';
import style from '../styles/Formulario.module.css';
import { OPCIONES } from '../Opciones';
import PropTypes from 'prop-types'

export const Formulario = ({ guardarCategoria }) => {

    const [ categoria, SelectNoticias ] = useSelect('general',OPCIONES);
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        guardarCategoria(categoria);
    }
    return (
        <div className={`${style.buscador} row`}>
            <div className='col s-12 m8 offset-m2'>
                <form onSubmit={handleSubmit}>
                    <h2 className={style.heading}>Encuentra Noticias por Categoría</h2>
                    <SelectNoticias/>
                    <div className='input-field col s12'>
                        <input
                            type='submit'
                            className={` ${style['btn-block']} btn-large amber darken-2`}
                            value='Buscar'
                        ></input>
                    </div>
                </form>
            </div>
        </div>
    )
}
Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}