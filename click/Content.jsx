import { useState } from 'react'

const Content = () => {
    const [color,setColor] = useState('');
    const [count, setCount] =useState(0);
    const handleClick = () =>{
        setCount((c)=>c+1);
        setCount((c)=>c+1);
        setCount((c)=>c+1);
        setCount((c)=>c+1);
        setCount((c)=>c+1);
        setCount( (c)=>{
          return c+1
        })
    }
    const greetList = ['Hello', 'Hi', 'Hola', 'Namasthe', 'Namaskar'];
    const rand = Math.floor(Math.random()*5)
    const greet = greetList[rand];
    
    
  return (
    
    <div style =  {{
      backgroundColor: color,
    }}>
      <h3>
        {count} times clicked </h3>
     <h3>
        {greet} students welcome all !!!
      </h3>
       <button onClick={handleClick}>Click
      </button>
      <br></br>
      <input type='text'
      placeholder='Enter color '
      onChange={(e) => {
        setColor(e.target.value);
        console.log(e.target.value);
      }} />
    </div>
  
  )
}

export default Content
