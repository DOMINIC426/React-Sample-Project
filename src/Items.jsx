import { useState } from "react"
export default function Items(){
    const [food,setFood]=useState(["Cocoa","Rice","Banana","Water-Melon"]);
    const [foodName,setName]=useState("");
    const [message,setMesage]=useState("")


  function addFood(){
    //set the food name
    if(foodName.trim()===""){
        setMesage("Please fill the food name")
        return
    }
    setFood(previous=>[...previous,foodName])
    setName("")
    
    setMesage("")
  }

   function handleAddName(e){
    
    setName(e.target.value);
   }

   function handleDelete(index){
    setFood(previous=>previous.filter((item,i)=>i!==index))
   }

   function handleEdit(index){
    const newName=prompt("Enter the new name of the food");
    if(newName.trim()===""){
        setMesage("Please fill the food name")
        return
    }
    setFood(previous=>previous.map((item,i)=>i===index?newName:item))
    setMesage("")
   }


    return(
        <div>
           
           <h2 className="text-green-400 font-bold text-2xl">The Lists of Fruits below</h2>
           <p className="text-red-600 text-2xl">{message}</p>
           <input type="text" placeholder="enter name of Fruit"  className="p-3 border m-2" value={foodName} onChange={handleAddName}/>
           <button className="bg-blue-500 p-3 w-25" onClick={addFood}>Add</button>
           <ul className="border-dotted border-2 text-center">
              {
                food.map((item,index)=>{
                     return(
                        <li key={index} onClick={()=>handleDelete(index)}>
                         {item}
                     </li>
                     )
                })
              }
           </ul>
        </div>
    )
}


