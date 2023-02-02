"use client"
import {useRouter} from 'next/navigation'

/* async function addTodo(id,refresh){
    let req= await fetch(`/api/todo/add`,
    {method: 'ADD',
   
    body: JSON.stringify({id}),
   }) 
   refresh()
} */

async function deleteTodo(id,refresh){
    let req= await fetch(`/api/todo/delete?id=${id}`,
    {method: 'DELETE',
   
//    body: JSON.stringify({id}),
   }) 
   refresh()
}
async function updateTodo(id,isDone,refresh){
    let req= await fetch("/api/todo/update",
 {method: 'POST',
body: JSON.stringify({id,isDone}),
})
refresh()
}
export default function Todos({todo}){
const router = useRouter()

return(
    <>
    <input type="checkbox" onChange={(e)=>updateTodo(todo.id,e.target.checked,router.refresh)}
    checked={todo.isDone}/>
    {todo.name}
    <button onClick={()=>deleteTodo(todo.id,router.refresh)}>Delete</button>
    
    </>
)

}