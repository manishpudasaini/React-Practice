import React,{useState} from 'react'

export default function HookExample() {
    const[value,SetValue] = useState(0);

    function increaseValue(){
        SetValue(value+1);
    }
  return (
    <div>
        <p>{value}</p>
        <button onClick={increaseValue}>
            Increase number
        </button>

    </div>
  )
}
