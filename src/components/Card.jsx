const Card = () => {
  return (
    <div className = "w-1/2 h-1/2 bg-amber-100 shadow-2x1 rounded-1g p-2 items-center flex flex-col space-y-10 justify-between">  
    <div>
      <h1 className = "text-3xl font-semibold underline">My Todo List</h1>
    </div>
    <button className = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded focus: outline-none focus:shadow-outline" > Clear
    </button>
    </div>
  )
}

export default Card