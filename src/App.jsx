import React from 'react'
import bg from './assets/background.png'
import Card from './components/Card'


function App() {

  return (
    <>
    <div style={{ backgroundImage: `url(${bg})` }}  className="h-screen w-screen bg-no-repeat bg-cover bg-center">
      <div className = "container mx-auto flex items-center justify-center h-screen" >
        <Card  />
       
      </div>
    </div>
    </>
  )
}

export default App
