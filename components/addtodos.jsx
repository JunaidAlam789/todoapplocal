"use client"
import {useRouter} from 'next/navigation'
import {useState} from 'react'

async function addTodo(name,refresh){
    let req= await fetch(`/api/todo/add`,
    {method: 'POST',
   
    body: JSON.stringify({name}),
   }) 
   refresh()
}

export default function Addtodos(){
let [name ,setName]=useState("")
const router = useRouter()

return(
    
    <div>
    <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
    <button onClick={async ()=>{
        await addTodo(name, router.refresh)
        setName("")
        }}>Add ToDo</button>
    </div>
    
)

}


