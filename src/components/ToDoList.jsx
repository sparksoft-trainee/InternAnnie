

const ToDoList = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="min-h-screen flex justify-center md:text-lg text-gray-700 tracking-wide md:tracking-wider">
        <div className="md:mb-20 transform scale-90 md:scale-100" style={{ width: '566px' }}>
          {/* Title */}
          <h1 className="mt-2 mb-6 md:mt-20 md:mb-12 uppercase text-center text-4xl md:text-5xl md:transform md:scale-105 font-bold" style={{ fontFamily: `'Baloo Tamma 2', sans-serif`, letterSpacing: '12px' }}>
            Todo List
          </h1>
          {/* Input */}
          <label className="mb-3 flex items-center bg-white rounded-xl overflow-hidden shadow-2xl">
            <input id="task-input" className="pl-7 pr-4 py-3 flex-grow md:text-lg tracking-wide md:tracking-wider border-none focus:ring-0 placeholder-gray-400" type="text" placeholder="Add new to-do item" autoFocus />
            <button id="add-task" className="mr-1 w-11 h-11 text-3xl text-white bg-gray-800 rounded-xl focus:outline-none">＋</button>
          </label>
          {/* Tasks */}
          <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
            <ul id="filters" className="flex text-center font-bold">
              <li className="py-4 flex-grow cursor-pointer filter-active transition duration-75">All</li>
              <li className="py-4 flex-grow cursor-pointer filter-inactive transition duration-75">To be completed</li>
              <li className="py-4 flex-grow cursor-pointer filter-inactive transition duration-75">Completed</li>
            </ul>

            <ul id="tasks" className="px-4 py-1"></ul>

            <div className="flex justify-between tracking-normal sm:tracking-wide">
              <p className="px-8 py-6 pb-8"><span id="unfinished-task-num"></span> Projects to be completed</p>
              <button id="clear-finished-tasks" className="px-8 py-6 pb-8 pr-10 text-gray-300 transition hover:text-gray-700 focus:outline-none">Clear completed items</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToDoList
