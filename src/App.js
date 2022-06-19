import React from 'react';
import { input, clear, equal, calc } from './features/calculator/calculatorSlice'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const value = useSelector(state => state.calculator.input_value)
  const operation = useSelector(state => state.calculator.operation)
  const expression = useSelector(state => state.calculator.stored_term)
  const dispatch = useDispatch()
  

  return (
    <div className="App">
      <div className="calculadora">
        <div>{operation}</div>
        <div className="row">
          <div className="col-12 expr">{expression == '' ? '0' : expression}</div>
        </div>
        <div className="row">
          <div id="display" className="col-12">{value == '' ? '0' : value}</div>
        </div>
        <div className="row">
          <div className="btn btn-warning col-12" id="clear" onClick={() => dispatch(clear())}>C</div>
        </div>
        <div className="row">
          <div className="btn col-3" id="zero" onClick={() => dispatch(input(0))}>0</div>
          <div className="btn col-3" id="decimal" onClick={() => dispatch(input("."))}>.</div>
          <div className="btn col-3" id="equals" onClick={() => dispatch(equal())}>=</div>          
          <div className="btn col-3" id="add" onClick={() => dispatch(calc("+"))}>+</div>                        
        </div>
        <div className="row">          
          <div className="btn col-3" id="one" onClick={() => dispatch(input(1))}>1</div>
          <div className="btn col-3" id="two"onClick={() => dispatch(input(2))}>2</div>
          <div className="btn col-3" id="three" onClick={() => dispatch(input(3))}>3</div>
          <div className="btn col-3" id="divide" onClick={() => dispatch(calc("/"))}>/</div>
        </div>
        <div className="row">          
          <div className="btn col-3" id="four" onClick={() => dispatch(input(4))}>4</div>
          <div className="btn col-3" id="five" onClick={() => dispatch(input(5))}>5</div>
          <div className="btn col-3" id="six" onClick={() => dispatch(input(6))}>6</div>
          <div className="btn col-3" id="multiply" onClick={() => dispatch(calc("*"))}>*</div>
        </div>
        <div className="row">          
          <div className="btn col-3" id="seven" onClick={() => dispatch(input(7))}>7</div>
          <div className="btn col-3" id="eight" onClick={() => dispatch(input(8))}>8</div>
          <div className="btn col-3" id="nine" onClick={() => dispatch(input(9))}>9</div>
          <div className="btn col-3" id="subtract" onClick={() => dispatch(calc("-"))}>-</div>
        </div>
      </div>
    </div>
  );
}

export default App;
