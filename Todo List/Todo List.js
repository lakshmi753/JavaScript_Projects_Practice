const createTaskBtn = document.querySelector(".create-task-btn");
const enterTask = document.querySelector(".enter-task");
const taskBox = document.querySelector(".task-box");

let todoArr = [];

getLocalStorage();

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function displayTask({ task, time, id }) {
  const html = `
       <div class="tasks hidden taskk" data-id="${id}">
          <div class="pin-task taskk">🗓️ ${time} : 📌 ${task}</div>
          <div class="task--btns taskk">
            <div class="first-btnp taskk">
              <button class="btns pending--btn taskk" id="pending-btn">
                Pending ❎
              </button>
            </div>
            <div class="first-btnd first-btn-hidden taskk">
              <button class="btns done--btn finish-task taskk">Done ☑️</button>
            </div>
            <button class="btns edit--btn taskk">Edit 🖋️</button>
            <button class="btns delete--btn taskk">Remove task 🗑️</button>
          </div>
        </div>`;

  taskBox.insertAdjacentHTML("beforeend", html);
}

function setLocalStorage() {
  localStorage.setItem("todoArr", JSON.stringify(todoArr));
}

function getLocalStorage() {
  const data = JSON.parse(localStorage.getItem("todoArr"));

  if (!data) return;

  todoArr = data;

  todoArr.forEach((task) => displayTask(task));
}

function handleCreateTask() {
  const taskk = enterTask.value.toUpperCase();
  const task = taskk[0] + taskk.slice(1).toLowerCase();

  const id = (Date.now() + "").slice(-10);

  const date = new Date();

  let hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  let minutes =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  let seconds =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  const time = `${date.getDate()} ${
    months[date.getMonth()]
  }, ${hours}:${minutes}:${seconds} ${hours >= 0 && hours < 12 ? "AM" : "PM"}`;

  let taskObj = {
    task: task,
    time: time,
    id: id,
  };

  todoArr.push(taskObj);

  setLocalStorage();

  displayTask(taskObj);
}

createTaskBtn.addEventListener("click", handleCreateTask);
