import React from 'react'
import Firstpage from './components/Firstpage'
import Secondpage from './components/Secondpage'
import Thirdpage from './components/Thirdpage'
import Fourthpage from './components/Fourthpage'

function App() {
  return (
    <div className='main w-full h-screen bg-[#d0caca] '>
      <Firstpage/>
      <Secondpage/>
      <Thirdpage/>
      <Fourthpage/>
    </div>
  )
}

export default App