import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Form from './Form'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <Form/>
    
    </main>
  </StrictMode>
)
