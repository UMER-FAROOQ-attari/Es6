import React,{ useState , useEffect } from 'react'
import './App.css'
import "tailwindcss"
import './componet/Nav'
import Nav from './componet/Nav'
import BlurText from './componet'
import { Carousel } from 'flowbite-react'
const App = () => {
  const [time, settime] = useState("")
    const clock  =  ()=> {
    let date = new Date();
      let hh = date.getHours();
      let mm = date.getMinutes();
      let ss = date.getSeconds();
      let ft = `${hh}:${mm}:${ss}`
      
      return settime(ft) 
    }

 useEffect(() => {
    const interval = setInterval(clock, 1000);  // Update time every second
    return () => clearInterval(interval);
  }, []);    
  return (
 <>
 <Nav />
 <h1 className='text-[30px] bg-amber-300 text-emerald-700'>{time}</h1>
 </>
  )
}

export default App