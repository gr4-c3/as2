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

    // making the bot simulate a response with a timeline of events
    function simulateBotResponse() {
        //charlotte joins after 1 second
        setTimeout(() => {
            if (!activeUsers.includes("Charlotte (Sister)")) {
                activeUsers.push("Charlotte (Sister)");
                renderUserList();
                appendMessage("Charlotte (Sister) joined the chat room.", "system");
            }
        }, 1000);

        //she shows a typing indicator after 3 seconds
        setTimeout(() => {
            if (activeUsers.includes("Charlotte (Sister)")) {
                typingIndicator.textContent = "Charlotte (Sister) is typing...";
            }
        }, 3000);

        //the indicator goes away and she sends a message after 6 seconds
        setTimeout(() => {
            if (activeUsers.includes("Charlotte (Sister)")) {
                typingIndicator.textContent = "";
                appendMessage("Hey i miss you! I hope you come home soon.", "other");
            }
            
            //she leaves the chat
            setTimeout(() => {
                activeUsers = activeUsers.filter(u => u !== "Charlotte (Sister)");
                renderUserList();
                appendMessage("Charlotte (Sister) has exited the chat.", "system");
            }, 3000);

        }, 6000);
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