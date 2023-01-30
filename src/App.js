import {useTelegram} from "./hooks/useTelegram";
import {useEffect, useState} from "react";
import {Button, TextField} from "@mui/material";

function App() {

    const {user, tg} = useTelegram()
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])

   useEffect(() => {
       tg.ready()
   } , [tg])

    const handleTask = (e) => {
        setTask(e.target.value)
    }

    const createTask = () => {
        setTasks([...tasks, {task: task}])
    }

  return (
    <div className="App container mx-auto px-2">
      <div className={`text-2xl`}>Здравствуйте {user}</div>

        <div className={`mt-4`}>
            <TextField fullWidth={true} value={task} onChange={handleTask} label={'название задачи'}/>

            <Button onClick={createTask}>Создать задачу</Button>
        </div>

        <div>
            <div className={`text-xl`}>ваши задачи</div>
            {tasks.map(tasking => <div className={`text-gray-400 text-md`}>{tasking.task}</div>)}
        </div>
    </div>
  );
}

export default App;
