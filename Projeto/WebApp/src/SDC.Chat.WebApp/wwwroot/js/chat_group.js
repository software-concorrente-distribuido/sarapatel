"use strict";

var groupId = document.getElementById("groupId").value;

var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub?groupId=" + groupId).build();

document.getElementById("sendButton").disabled = true;

connection.on("ReceiveMessage", function (user, message, date) {
    var li = document.createElement("li");
    li.classList.add("text-end"); 
    li.innerHTML = `<strong>${user}</strong>   <small>${date}</small> <br>${message}`;
    document.getElementById("messagesList").appendChild(li);
 
    var chatBox = document.querySelector('.chat-box');
    chatBox.scrollTop = chatBox.scrollHeight;
});

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendButton").addEventListener("click", function (event) {
    var message = document.getElementById("messageInput").value;
    if (message.trim() !== "") {
        connection.invoke("SendGroupMessage", message, groupId).catch(function (err) {
            return console.error(err.toString());
        });
        document.getElementById("messageInput").value = '';
    }
    event.preventDefault();
});

document.getElementById("messageInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("sendButton").click();
        event.preventDefault();
    }
});