// Get the timer elements
const timer = document.querySelector('.timer');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

// Get the task list elements
const taskList = document.querySelector('.task-list');
const taskInput = document.querySelector('#task');
const addButton = document.querySelector('#add');

// Timer variables
let intervalId;
let hoursValue = 0;
let minutesValue = 0;
let secondsValue = 0;

// Function to start the timer
function startTimer() {
  intervalId = setInterval(() => {
    secondsValue++;
    if (secondsValue === 60) {
      minutesValue++;
      secondsValue = 0;
    }
    if (minutesValue === 60) {
      hoursValue++;
      minutesValue = 0;
    }
    hours.textContent = hoursValue.toString().padStart(2, '0');
    minutes.textContent = minutesValue.toString().padStart(2, '0');
    seconds.textContent = secondsValue.toString().padStart(2, '0');
  }, 1000);
}

// Function to stop the timer
function stopTimer() {
  clearInterval(intervalId);
}

// Function to reset the timer
function resetTimer() {
  hoursValue = 0;
  minutesValue = 0;
  secondsValue = 0;
  hours.textContent = '00';
  minutes.textContent = '00';
  seconds.textContent = '00';
}

// Function to add a task to the list
function addTask() {
  const taskText = taskInput.value;
  const task = document.createElement('li');
  task.innerHTML = '<input type="checkbox">' + taskText;
  taskList.appendChild(task);
  taskInput.value = '';
}