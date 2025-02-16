(function() {
    'use strict';

    let originalMessages = {};
    let boxVisible = true;

    function createControlBox() {
        let box = document.createElement("div");
        box.id = "fakeMessageBox";
        box.style.position = "fixed";
        box.style.bottom = "10px";
        box.style.right = "10px";
        box.style.background = "#2c2f33";
        box.style.color = "white";
        box.style.padding = "10px";
        box.style.borderRadius = "5px";
        box.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";
        box.style.zIndex = "9999";

        box.innerHTML = `
            <label>Message ID:</label><br>
            <input type='text' id='fakeMsgId' style='width: 200px;'><br>
            <label>New Text:</label><br>
            <input type='text' id='fakeMsgText' style='width: 200px;'><br>
            <button id='applyFakeChange'>Apply</button>
            <button id='resetFakeChange'>Reset</button>
            <button id='hideBox'>Hide</button>
            <span style='margin-left: 10px;'>By Bacon But Pro</span>
        `;
        document.body.appendChild(box);

        let toggleButton = document.createElement("button");
        toggleButton.id = "toggleBoxButton";
        toggleButton.innerText = "Show";
        toggleButton.style.position = "fixed";
        toggleButton.style.bottom = "10px";
        toggleButton.style.right = "10px";
        toggleButton.style.background = "#7289da";
        toggleButton.style.color = "white";
        toggleButton.style.padding = "5px 10px";
        toggleButton.style.border = "none";
        toggleButton.style.borderRadius = "5px";
        toggleButton.style.boxShadow = "0 0 5px rgba(0,0,0,0.3)";
        toggleButton.style.zIndex = "9998";
        toggleButton.style.display = "none";
        document.body.appendChild(toggleButton);

        document.getElementById("applyFakeChange").addEventListener("click", () => {
            let msgId = document.getElementById("fakeMsgId").value.trim();
            let newText = document.getElementById("fakeMsgText").value;
            if (msgId && newText !== "") {
                fakeEditMessage(msgId, newText);
            }
        });

        document.getElementById("resetFakeChange").addEventListener("click", () => {
            let msgId = document.getElementById("fakeMsgId").value.trim();
            if (msgId) {
                resetMessage(msgId);
            }
        });

        document.getElementById("hideBox").addEventListener("click", () => {
            toggleControlBox();
        });

        toggleButton.addEventListener("click", () => {
            toggleControlBox();
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "End") {
                toggleControlBox();
            }
        });
    }

    function toggleControlBox() {
        let box = document.getElementById("fakeMessageBox");
        let toggleButton = document.getElementById("toggleBoxButton");
        if (box) {
            if (boxVisible) {
                box.style.display = "none";
                toggleButton.style.display = "block";
            } else {
                box.style.display = "block";
                toggleButton.style.display = "none";
            }
            boxVisible = !boxVisible;
        }
    }

    function fakeEditMessage(messageId, newText) {
        let messageElement = document.querySelector(`#message-content-${messageId}`);
        if (messageElement) {
            let textSpan = messageElement.querySelector("span");
            if (textSpan) {
                if (!originalMessages[messageId]) {
                    originalMessages[messageId] = textSpan.textContent;
                }
                textSpan.textContent = newText;
            } else {
                alert("Message content span not found.");
            }
        } else {
            alert("Message not found. Make sure it's visible on screen.");
        }
    }

    function resetMessage(messageId) {
        let messageElement = document.querySelector(`#message-content-${messageId}`);
        if (messageElement) {
            let textSpan = messageElement.querySelector("span");
            if (textSpan && originalMessages[messageId]) {
                textSpan.textContent = originalMessages[messageId];
                delete originalMessages[messageId];
            } else {
                alert("Original message not stored or span not found.");
            }
        } else {
            alert("Message not found. Make sure it's visible on screen.");
        }
    }

    window.addEventListener("load", createControlBox);
})();
