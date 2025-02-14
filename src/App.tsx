import './App.css'
import Introduction from './components/Introduction'
import DegreeYear from './components/DegreeYear'
import Why from './components/Why'
import Experience from './components/Experience'
import Hobbies from './components/Hobbies'

function App() {

  return (
    <div className='bg-black'>
      <div className='flex items-center justify-center w-full p-6'><h1 className='bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-5xl font-extrabold text-transparent'>Aye Chan San</h1></div>
      
      <Introduction />
      <DegreeYear />
      <Why />
      <Experience />
      <Hobbies />
    </div>
  )
}

export default App
