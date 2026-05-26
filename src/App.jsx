import TaskCard from "./components/TaskCard"
import {useState} from "react"


const tasks = [
  {
    id: 1,
    title: "Read React notes",
    status: "Pending",
  },
  {
    id: 2,
    title: "Practice components",
    status: "Pending",
  },
  {
    id: 3,
    title: "Review props",
    status: "Completed",
  },
  {
    id: 4,
    title: "Revise event handling",
    status: "Pending",
  },
  {
    id: 5,
    title: "Practice conditional rendering",
    status: "Completed",
  },
  {
    id: 6,
    title: "Build a small task UI",
    status: "In Progress",
  },
  {
    id: 7,
    title: "Review useState",
    status: "Pending",
  },
  {
    id: 8,
    title: "Practice controlled inputs",
    status: "Pending",
  },
  {
    id: 9,
    title: "Submit React lab",
    status: "Pending",
  },
  {
    id: 10,
    title: "Prepare questions for tomorrow",
    status: "In Progress",
  },
];
function App(){
	const [selectedTask,setSelectedTask]=useState("")
	const[newTaskTitle,setnewTaskTitle]=useState("")
	const [submittedMessage,setSubmittedMessage]=useState("")
	const [newTaskStatus,setTaskStatus]=useState("")

	function handleSubmitTask(event){
		event.preventDefault();
		setSubmittedMessage(alert(`New task submitted: ${newTaskTitle} with status ${newTaskStatus}`))
		setnewTaskTitle("")
		setTaskStatus("")
	}

	return(
		<div>
			<h1>Task Tracker App</h1>
			<p>The App will allow users to add their tasks and track them</p>
			<h2>Add a new Task</h2>
			<form onSubmit={handleSubmitTask}>
			<label htmlFor="newtask">Task Title:</label>
			<input type="text" placeholder="Enter a new Task" value={newTaskTitle} onChange={(event)=>setnewTaskTitle(event.target.value)}></input>
			<label>Task Status:</label>
			<input type="text" placeholder="Enter a new Task" value={newTaskStatus} onChange={(event)=>setTaskStatus(event.target.value)}></input>
			<button type="submit">Add task</button>
			</form>
			<p>You are typing:{newTaskTitle}</p>
			<p>Status typed:{newTaskStatus}</p>
			{selectedTask ? (<p>Selected Task:{selectedTask}</p>): (<p>No task selected</p>)}
			<section>
				<h2>My Tasks</h2>
				{tasks.map((task)=>(<TaskCard key={task.id}title={task.title}
				status={task.status}
				onSelectTask={setSelectedTask}/>
				))}

			</section>

		</div>
		
	) 
}
export default App