const createTaskBtn = document.querySelector(".create-task-btn");
const enterTask = document.querySelector(".enter-task");

const todoArr = [];

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

function handleCreateTask() {
  const taskk = enterTask.value.toUpperCase();
  const task = taskk[0] + taskk.slice(1).toLowerCase();

  //console.log(task, taskk);

  const date = new Date();

  const time = `${date.getDate()} ${
    months[date.getMonth()]
  }, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${
    date.getHours() >= 0 && date.getHours() < 12 ? "AM" : "PM"
  }`;

  const taskObj = {
    task: task,
    time: time,
  };

  todoArr.push(taskObj);

  localStorage.setItem("todoArr", JSON.stringify(todoArr));

  const todoArr2 = JSON.parse(localStorage.getItem("todoArr"));
  console.log(todoArr2);
}

createTaskBtn.addEventListener("click", handleCreateTask);
