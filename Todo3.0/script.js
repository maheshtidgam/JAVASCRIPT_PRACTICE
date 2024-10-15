
document.addEventListener("DOMContentLoaded", () => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"))

    if (storedTasks) {
        storedTasks.forEach(task => tasks.push(task))
        updateTaskList()
        updatesStats()
        saveTasks()


    }
})
let tasks = [];

const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks))

}


const taskInput = document.getElementById("taskInput")
const addTask = () => {
    const taskInput = document.getElementById("taskInput")
    const text = taskInput.value.trim();
    if (text) {
        tasks.push({ text: text, completed: false })
        taskInput.value = "";

        updateTaskList();
        updatesStats();
        saveTasks();
    }


};


const toggleTaskComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    console.log(tasks)
    updatesStats()
    saveTasks();
    window.location.reload();
};

const deleteTask = (index) => {
    tasks.splice(index, 1)
    updateTaskList()
    updatesStats()
    saveTasks();
};

const editTask = (index) => {
    const taskInput = document.getElementById("taskInput")
    taskInput.value = tasks[index].text;
    tasks.splice(index, 1);
    updateTaskList();
    updatesStats()
    saveTasks();
};

const updatesStats = () => {
    const completeTask = tasks.filter(task => task.completed).length;

    const totalTask = tasks.length;
    const progress = (completeTask / totalTask) * 100 || 0;
    const progressbar = document.getElementById("progress");
    progressbar.style.width = `${progress}%`

    document.getElementById("numbers").innerText = `${completeTask}/ ${totalTask}`

}





const updateTaskList = () => {
    const taskList = document.getElementById("task-list")
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li')
        listItem.innerHTML = `
         <div class="taskItem">
        <div class="task ${task.completed ? 'completed' : ""}">
            <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""}/>
            <p>${task.text}</p>

        </div>
        <div class="icons">
            <img src="./images/edit.png" onClick="editTask(${index})" alt="">
            <img src="./images/bin.png"  onClick="deleteTask(${index})" alt="">
        </div>
    </div>
        
        `;


        listItem.addEventListener("change", () => {
            toggleTaskComplete(index);

        })

        taskList.appendChild(listItem)


    });



}


document.getElementById("newTask").addEventListener('click', function (e) {
    e.preventDefault();


    addTask()
})

