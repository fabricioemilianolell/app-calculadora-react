import { useState } from 'react';
import './App.css';
import { Boton } from './componentes/Boton';
import BotonClear from './componentes/BotonClear';
import { Pantalla } from './componentes/Pantalla';
import { evaluate } from "mathjs";

function App() {

  const [input, setInput] = useState("")

  const agregarInput = (valor) => {
    setInput(input + valor)
  }

  const calculadora = () => {
    if(input) {
      setInput(evaluate(input))
    } else {
      alert("Ingrese los valores para realizar los calculos");
    }
   
  }

  return (
    <div className="App">
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calculadora}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
        <BotonClear LimpiarBoton={() => setInput("")}>
          Clear
        </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
