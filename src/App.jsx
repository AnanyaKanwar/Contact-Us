import React from 'react'

import Navigation from './components/navigation'
import Contactheader from './components/contactheader'
import Image from '../public/images/Service.jpg'


const App = () => {
  return (
    <div className='h-screen w-full px-14 py-6'>
      <Navigation/>
      <div className='flex'>
      <Contactheader/>
      <img src={Image} className='' alt="" />
      </div>

      
    </div>
  )
}

export default App
