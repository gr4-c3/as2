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
