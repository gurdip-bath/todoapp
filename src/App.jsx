import React from 'react'
import bg from './assets/background.png'
import Card from './components/Card'
import AddTodoForm from './components/AddToDoForm'
import TodoList from './components/TodoList'
import TotalCompleteItems from './components/TotalCompelteItems'

function App() {

  return (
    <>
    <div style={{ backgroundImage: `url(${bg})` }}  className="h-screen w-screen bg-no-repeat bg-cover bg-center">
      <div className = "container mx-auto flex items-center justify-center h-screen" >
        <Card >
        <AddTodoForm />
        <TodoList />
        <TotalCompleteItems />
        </Card>
      </div>
    </div>

    </>
  )
}

export default App
