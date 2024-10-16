const chatbox = document.querySelector(".chatbox");
const sendBtn = document.querySelector(".send--icon");
const inputmsg = document.querySelector(".typing--msg");
const headerCloseBtn = document.querySelector(".header--close-button");
const togglerBtn = document.querySelector(".button--close-open");

let userMessage = null;
const inputInitHeight = inputmsg.scrollHeight;
const API_key = "8888888888888888888888888888888888888888888";

const createChatEl = function (msg, className) {
  // Creating the 'Html element' for inserting message.....
  const inputMsgEl = document.createElement("div");
  inputMsgEl.classList.add("chat", className);
  let chatcontent =
    className === "outgoing--msg"
      ? `<p></p>`
      : ` <div  class="robo--icon  material-symbols-sharp">smart_toy</div><p></p>`;

  inputMsgEl.innerHTML = chatcontent;

  // Inserting the 'recieved message' in the html element.......
  inputMsgEl.querySelector("p").textContent = msg;

  return inputMsgEl;
};

const generateResponse = function (msgEl) {
  const API_url = "https://api.openai.com/v1/completions";
  const ApiMsgEl = msgEl.querySelector("p");

  // Defining properties and message for API request.........
  const requestOptn = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_key}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userMessage }],
    }),
  };

  // Sending request to API and getting and setting response............
  fetch(API_url, requestOptn)
    .then((res) => res.json())
    .then((data) => {
      ApiMsgEl.textContent = data.choices[0].message.content.trim();
    })
    .catch(() => {
      ApiMsgEl.classList.add("error");
      ApiMsgEl.textContent = "Oops! Something went wrong. Please try again.";
    })
    .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
};

const handleChat = function () {
  userMessage = inputmsg.value.trim();

  // guard clause....................
  if (!userMessage) return;

  // Clearing the input textarea and resetting the initial height...
  inputmsg.value = "";
  inputmsg.style.height = inputInitHeight;

  // Inserting the user's message............
  chatbox.appendChild(createChatEl(userMessage, "outgoing--msg"));

  // Resetting the height of the 'chatbox' acc. to the content......
  chatbox.scrollTo(0, chatbox.scrollHeight);

  // Handling messages from "API"..................
  setTimeout(() => {
    // getting the incomming message html element...
    const incommingMsgEl = createChatEl("Thinking...", "incomming--msg");

    // Inserting API's message.........
    chatbox.appendChild(incommingMsgEl);
    chatbox.scrollTo(0, chatbox.scrollHeight);

    // Replacing the "Tinking..." message with the API's response....
    generateResponse(incommingMsgEl);
  }, 600);
};

inputmsg.addEventListener("input", () => {
  // Adjust the "text-msg area" acc. to the content...
  inputmsg.style.height = `${inputInitHeight}px`;
  inputmsg.style.height = `${inputmsg.scrollHeight}px`;
});

sendBtn.addEventListener("click", handleChat);
headerCloseBtn.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);
togglerBtn.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);

//sk-proj-b2nVJ01SWTVTAcp3gfHqT3BlbkFJuGYY6jHRWsWtEZcF2TCW
//sk-proj-b2nVJ01SWTVTAcp3gfHqT3BlbkFJuGYY6jHRWsWtEZcF2TCW
