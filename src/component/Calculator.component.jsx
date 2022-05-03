import './Calculator.style.css'
import React, {useState} from 'react'

const Calculator = () => {

    const[input,setInput] = useState('')

    const handleOnChange= (event) =>{
        setInput(event.target.input)
    }

    const numberHandler= (event) => {
       setInput ((input) => {return input.concat(event.target.innerHTML)})
    }

    const equal = () =>{
       setInput(eval(input).toString())
    }

    const handleOnClear = () =>{
        setInput('')
    }

    

  return (
   <>
        <div className='calculator'>
        <div className='single-row'>
            <input className='input' type='text' value={input} onChange={handleOnChange}/>

            <button className='operations' onClick={handleOnClear}>clear</button> 
            <button className='button' onClick={numberHandler}>0</button> 
            <button className='button'onClick={equal}>=</button>
            <button className='operations' onClick={numberHandler}>+</button>
        

        
            <button className='button' onClick={numberHandler}>7</button>
            <button className='button' onClick={numberHandler}>8</button>
            <button className='button' onClick={numberHandler}>9</button>
            <button className='operations' onClick={numberHandler}>/</button>
       

        
            <button className='button' onClick={numberHandler}>4</button>
            <button className='button' onClick={numberHandler}>5</button>
            <button className='button' onClick={numberHandler}>6</button>
            <button className='operations' onClick={numberHandler}>*</button>

        

        
            <button className='button' onClick={numberHandler}>1</button>
            <button className='button' onClick={numberHandler}>2</button>
            <button className='button' onClick={numberHandler}>3</button> 
            <button className='operations' onClick={numberHandler}>-</button>
        </div>
            
        </div>
   </>
  )
}

export default Calculator