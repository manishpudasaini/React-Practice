import React ,{useState} from 'react'

export default function Hookpractice() {
    const[name,setName] = useState({"firstname":"","lastname":"","address":""})
  return (
    <div>
        <input type="text" value={name.firstname} onChange={e => setName({...name , firstname:e.target.value})}/>
        <input type="text" value={name.lastname} onChange={e => setName({...name , lastname:e.target.value})}/>
        <input type="text" value={name.address} onChange={e => setName({...name , address:e.target.value})}/>

        <h1>First-Name of the man is {name.firstname}</h1>
        <h1>Last-Name of the man is {name.lastname}</h1>
        <h1>Address of the man is {name.address}</h1>

        <p>{JSON.stringify(name)}</p>
    </div>
    
  )
}
