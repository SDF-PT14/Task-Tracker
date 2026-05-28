function TaskCard({title,status,onSelectTask}){
	function handleSelectTask(){
		onSelectTask(title)
	}
	return(
		<div>
				<h3>{title}</h3>
				<p>Status: {status}</p>
				<button onClick={handleSelectTask}>Select Task</button>
		</div>
	)

}
export default TaskCard