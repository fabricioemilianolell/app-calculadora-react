import "../estilos/boton.css"

export const Boton = ({children, manejarClick}) => {

     const esOperador = (operador) => {
        return (isNaN(operador)) && (operador !== ".") && (operador !== "=")
     };
     
  return ( 
    <button 
    className={`boton-contenedor ${esOperador(children) ? "operador" : ""}`.trimEnd() }
    onClick={() => manejarClick(children)}>
    { children }
    </button>
  )
}



