import { useState } from "react";
import { UserIcon } from "lucide-react";

export default function Bojo() {

    const [form,setForm]=useState({
        name:"",
        email:"",
        "password":""
    });

    const [message,setMessage]=useState("");

    function handleChange(e){

        const {name,value}=e.target;
        //insert them to get value
        setForm(previous=>({
            ...previous,
            [name]:value
        }))
        setMessage("");

    }

    function handleSubmit(e){
        e.preventDefault()
        if(form.name.trim()===""){
            setMessage("Please fill the name ");
            return
        }
        if(form.email.trim()===""){
            setMessage("Please fill your email")
            return
        }
        if(form.password.trim()===""){
            setMessage("Password is required");
            return
        }

        setMessage("");

    
    }

    return(
        <div>
            <form action="#" className="border border-amber-50 bg-slate-200 p-4">
                <div>
                    <input type="text" placeholder="first name"  name="name"  onChange={handleChange} value={form.name}/>
                </div>
                <div>
                 <input type="text" placeholder="email" name="email" required  onChange={handleChange} value={form.email}/>
                </div>
                <div>
                    <input type="password" placeholder="password" name="password" onChange={handleChange} value={form.password}  required/>
                </div>
                   <div className="text-center">
                    <button className="bg-blue-700 p-1 w-25 rounded-2xl" onClick={handleSubmit}>Register</button>
                   </div>
            </form>

               <div className="text-center">
                <p className="text-red-600">{message}</p>
                 <h1>applicant informations</h1>
                    <h1>name: {form.name}</h1>
                    <h1>email:{form.email}</h1>
               </div>

        </div>
    )

}