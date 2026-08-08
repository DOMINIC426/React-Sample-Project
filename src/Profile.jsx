
import {} from 'react-icons'
import { User2Icon } from 'lucide-react'

export default function Profile(props){

    return(
        <div className='bg-white p-4 w-2/4  rounded-2xl flex flex-col justify-center items-center gap-3 h-fit'>
          
       {/* image section */}
       <div className='bg-white'>
        <section className='bg-white   p-4 flex flex-col justify-center items-center'>
            <h2 className='font-bold text-2xl mb-2'>Profile</h2>
            <User2Icon className='w-20 h-14 border-2 rounded-[50%] p-0 bg-amber-50' />

            <h2 className='text-xl font-bold'>{props.name}</h2>

        </section>

        {/* followers informations */}

          <div className='flex justify-between gap-3 bg-white p-4 w-full'>

    <section className='flex flex-col gap-1'>
        <h1>{props.followers}90</h1>

        <p>Follwers</p>
    </section>
    <hr className='bg-amber-300'/>

    <section>
        <h1>1,0043</h1>
        <p>Following</p>
    </section>
  <hr />
    <section>
        <h1>12</h1>
        <p>Events</p>
    </section>

   <hr />
          </div>
{/* end of followers informations */}
       </div>

    
        </div>
    )
}
