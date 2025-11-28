console.log('Hello!');

/*
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerText = taskText;

        // Add a delete button to each task
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });
        listItem.appendChild(deleteBtn);

        taskList.appendChild(listItem);
        taskInput.value = ''; // Clear the input
    }
});

// You can add more functionality here, like marking tasks as complete or saving to local storage.


const taskInput = document.querySelector('#task-input');
const addTaskBtn = document.querySelector('#add-task-btn');
const taskList = document.querySelector('#task-list');

function addTaskBtnclick () {
console.log(addTaskBtnclick)

const taskText = taskInput.value.trim()

if (taskText !== ""){

  const listItem = document.createElement ("li")
  listItem.innerText = taskText

  const deleteBtn = document.createElement("button")
  deleteBtn.innerText = "Slett"
  deleteBtn.classList.add("deleteButton")
  
  
  listItem.appendChild(deleteBtn)
  
  taskList.appendChild(deleteBtn)
  
  taskInput.value = ""
}


}

const

function deleteBtnClick () {
  
  taskList.removeChild(listItem)
  
}


deleteBtn.addEventListener("click", deleteBtnClick)

addTaskBtn.addEventListener("click", addTaskBtnclick)

*/

const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerText = taskText;

        // Add a delete button to each task
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Slett';
        deleteBtn.classList.add('deleteButton');
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });
        listItem.appendChild(deleteBtn);

        taskList.appendChild(listItem);
        taskInput.value = ''; // Clear the input
    }
});