import TaskCard from "./components/TaskCard"
import {useState} from "react"
function App(){
	const [selectedTask,setSelectedTask]=useState("")
	return(
		<div>
			<h1>Task Tracker App</h1>
			<p>The App will allow users to add their tasks and track them</p>
			{/* <p>Selected Task:{selectedTask}</p> */}
			{selectedTask ? (<p>Selected Task:{selectedTask}</p>): (<p>No task selected</p>)}
			<section>
				<h2>My Tasks</h2>
				<TaskCard title="Read React Notes" status="Pending" onSelectTask={setSelectedTask}/>
				<TaskCard title="Practice Components" status="Pending" onSelectTask={setSelectedTask}/>
				<TaskCard title="Review Props" status="Completed" onSelectTask={setSelectedTask}/>
			</section>

		</div>
		
	) 
}
export default App