import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {//this is static data. It wont be changed by any functions.
      //if we wanted to change this we'd make fetch or HTTP requests to a server for this
        id: 1,
        text: 'Homework',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Videogames',
        day: 'Feb 5th at 2:31pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'Legos',
        day: 'Feb 5th at 2:31:15pm',
        reminder: true,
    },
])

//Add task
const addTask = (task) => {
  const id = Math.floor(Math.random() *1000) +1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}

//Delete Task
const deleteTask = (id) => {
  //console.log('delete', id)
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle reminder

const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder} : task
    )
    )
}

  return (
    <div className='container'>
      <Header 
      title='My Bruh Moments' 
      onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}
       />

      {showAddTask && <AddTask onAdd={addTask}/>}

      <img src="https://scontent-lga3-2.xx.fbcdn.net/v/t31.18172-8/12710860_962082760545114_5771724420675882439_o.jpg?_nc_cat=107&amp;ccb=1-5&amp;_nc_sid=e3f864&amp;_nc_ohc=rVjUaYBA8GsAX-P3V6b&amp;_nc_ht=scontent-lga3-2.xx&amp;oh=00_AT8F4UjkUUYCIEGXxhI9iVnXxvGC-DHWtvZCoV6rcuaV4w&amp;oe=62135859" alt="damn bro I just caught you lookin at alt text on an img element. damn." width="435px"/>

      {tasks.length >0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : ('No Tasks to Show')
      }
      
    </div>
    //only deletes items from the UI, items are not stored on a centralized server. That can be done with a json server possibly

  );
};

export default App;
