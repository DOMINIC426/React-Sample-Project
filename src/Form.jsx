
import {House,User,LockIcon} from 'lucide-react'
import special from './assets/special.jpeg'

 import { FaFacebook ,FaInstagram,FaGoogle} from "react-icons/fa";
export default function Form(){
 return(
    // this will hold two div inside it
    <div id="two-div">
        {/* two divs */}

        <div className="flex" >
            {/* outer div */}
            <div className="bg-pink-400 w-90 " style={{
                backgroundImage: `url(${special})`,
                backgroundSize:'contain',
                opacity:'0.8'
            }}>
                <h2>LOGIN</h2>
                 
            </div>

            {/* form data here */}
            <form className="bg-white p-5">

            <div className='mb-4 flex justify-center flex-col items-center '>
                <User className='bg-pink-300 w-25 rounded-[50%] p-2 h-full'/>
                <h2 className='text-pink-600 font-bold text-2xl'>LOGIN</h2>
            </div>
              
            {/* email */}
            <div className='flex flex-col'>
                     
                     <section className='flex gap-2'>
                        <User/>
                        <span>Email</span>
                     </section>
                     <input type="text" placeholder="Email" className="w-87" / >
                    
                    
            </div>

            {/* password */}
            <div className="flex flex-col gap-1">
                <section className='flex gap-2'>
                        <LockIcon/>
                        <span>Password</span>
                     </section>
                     <input type="password" placeholder="Password" className="w-87" / >
                    
            </div>
            
            <section className='flex gap-3 justify-between items-center'>
                <p className="text-pink-500">forget password</p>
                  <button className='bg-pink-400 w-20 h-10 p-2 rounded-2xl mb-4'>LOGIN</button>
            </section>
            <hr />

            {/* the way to login */}
            <div className='flex items-center justify-between gap-3 bg-white mb-5'>
            
                <p className='text-center text-pink-500'>or login with</p>
                <div className='flex gap-3 justify-center items-center'>
                    <FaGoogle/>
                    <p>Google</p>
                </div>
                <div className='flex gap-3 justify-center items-center'>
                    <FaFacebook className='text-blue-600'/>
                    <p>Facebook</p>
                </div>
            </div>

            </form>
        </div>
    </div>
 )
}