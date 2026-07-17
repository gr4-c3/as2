//my active user list, starting with "You" as the default user
let activeUsers = ["You"];

document.addEventListener("DOMContentLoaded", () => {
    //getting all the DOM elements we need to manipulate
    const chatWindow = document.getElementById("chat-window");
    const msgInput = document.getElementById("msg-input");
    const sendBtn = document.getElementById("send-btn");
    const usersBox = document.getElementById("userList"); 
    const typingIndicator = document.getElementById("typingIndicator"); 

    // putting the active user list into the user list box
    function renderUserList() {
        usersBox.innerHTML = activeUsers.map(user => `<li>${user}</li>`).join('');
    }
function appendMessage(text, type) {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add("message", type);
        msgDiv.textContent = text;
        chatWindow.appendChild(msgDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Auto Scroll
    }
    //for sending messages, we have a function that handles both the button click and the enter key press
    function handleSendMessage() {
        const text = msgInput.value.trim(); 
        if (text === "") return; 

        appendMessage(text, "me");
        msgInput.value = ""; //empty the input field after sending

        //to simulate the bot response, we call the function after sending a message
        simulateBotResponse();
    }

    // make sure that all the event listeners are set up after the DOM is fully loaded
    sendBtn.addEventListener("click", handleSendMessage);
    
    msgInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    });

    //render the initial user list when the page loads
    renderUserList();
});
