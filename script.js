const noteContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    noteContainer.innerHTML = localStorage.getItem("note") || "";
    addEventListenersToNotes()
}
showNotes();


function updateStorage() {
    localStorage.setItem("note", noteContainer.innerHTML);
}

function addEventListenersToNotes() {
    const inputBoxes = document.querySelectorAll(".input-box");
    inputBoxes.forEach(inputBox => {
        inputBox.addEventListener("keyup", function () {
            updateStorage();
        });
    });

    const imgs = document.querySelectorAll(".input-box img");
    imgs.forEach(img => {
        img.addEventListener("click", function () {
            img.parentElement.remove();
            updateStorage();
        });
    });
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    noteContainer.appendChild(inputBox).appendChild(img);
    
    updateStorage()
    addEventListenersToNotes()
})

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();

    }
})