import React, { useState, useEffect } from 'react'
import Loader from './Loader';
/**
 *  Componente para crear respaldo y restaurar base de datos
 * @param {*} props 
 * @returns Componente 
 */
const BackUpRestore = props => {
    const [loading, setLodaing] = useState(false);

    useEffect(() => {
        var idTimeout = 0;
        idTimeout = setTimeout(() => {
            setLodaing(false)
        }, 2000);
        
        return () => {
            clearTimeout(idTimeout);
        }
    }, [loading])


    return (
        <>
            { loading === false ? (
                <div className='conteiner-BUR'>
                <div className='conteiner-BUR__BU'>
                    <h1>Respaldar</h1>
                    <form>
                        <input
                            type={'button'}
                            value="BackUp"
                            className='Espacios'
                            onClick={() => setLodaing(true)}
                        />
                    </form>
                </div>

                <div className='conteiner-BUR__R'>
                    <h1 >Restaurar</h1>
                    <form className='conteiner-BUR_R__form'>
                        <input type="file" className='Espacios'/>
                        <input type="button"
                            value={"Restaurar"}
                            className='Espacios'
                            onClick={() => setLodaing(true)}
                        />
                    </form>
                </div>
            </div>
            ) : (
                <Loader />
            )}
            
        </>
    )
}


export default BackUpRestore