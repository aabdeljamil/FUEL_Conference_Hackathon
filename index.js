function intoBox(){
    var div = document.createElement("DIV");
    var node = document.createElement("DT");
    var node1 = document.createElement("DD");

    var textnode = document.createTextNode("You:");
    var textBox = document.getElementById("message");
    var messageToSend = textBox.value;
    if (messageToSend == ""){
        return;
    }
    var textnode1 = document.createTextNode(messageToSend);

    node.id = "from";
    node1.id = "text";
    div.className = "individual";
    
    node.appendChild(textnode);
    node1.appendChild(textnode1);

    div.appendChild(node);
    div.appendChild(node1);

    document.getElementById("list").appendChild(div);

    //keep scrollbar all the way down
    var chatHistory = document.getElementById("list");
    chatHistory.scrollTop = chatHistory.scrollHeight;

    textBox.value = "";
}

function onEnter() {
    const ele = document.getElementById('message');

    ele.addEventListener('keydown', function(e) {
        // Get the code of pressed key
        const keyCode = e.which || e.keyCode;

        // 13 represents the Enter key
        if (keyCode === 13 && !e.shiftKey) {
            // Don't generate a new line
            e.preventDefault();
            intoBox();
        }
    });
}

function home(){
    window.location.href = "index.html";
}

function reported(){
    alert("The person has been reported. Thank you.");
}

function openChat(){
    window.location.href = "chat.html";
}