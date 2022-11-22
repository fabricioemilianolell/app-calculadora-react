import "../estilos/botonClear.css"

const BotonClear = ({children, LimpiarBoton}) => {
    return (
        <div className="boton-clear"
        onClick={LimpiarBoton}>
            {children}
        </div>
    )
}

export default BotonClear