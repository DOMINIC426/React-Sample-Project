import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Form from './Form'
import Profile from './Profile'
import List from './List'
import Game from './List'
import Items from './Items'
import Fomrs from './Forms'
import Bojo from './Bojo'
//import {animation ,AnimatePresence} from 'framer-motion'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main className="flex flex-col items-center justify-center h-screen bg-gray-200 gap-4">
      
    {/* <Fomrs/> */}
    <Bojo/>
    
     
    </main>
  </StrictMode>
)
