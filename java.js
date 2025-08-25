const button = document.getElementById("clickme");
const teks = document.getElementById("textme");
const list = document.getElementById("list");

button.addEventListener("click", function() {
    const teksv = teks.value.trim();
    
    if (teksv !== "") {
        const cardNote = document.createElement("div");
        cardNote.className = "card-note";

        const spanText = document.createElement("span");
        const divButton = document.createElement("div");
        spanText.textContent = teksv;
        cardNote.appendChild(spanText);

        const buttonEdit = document.createElement("button");
        buttonEdit.textContent = "Edit";

        buttonEdit.style.backgroundColor = "blue";
        divButton.appendChild(buttonEdit);

        const buttonDelete = document.createElement("button");
        buttonDelete.textContent = "Delete";
        buttonDelete.style.backgroundColor = "red";

        cardNote.style.display = "flex";
        cardNote.style.justifyContent = "space-between";
        divButton.appendChild(buttonDelete);

        cardNote.appendChild(divButton);

        list.appendChild(cardNote);

        teks.value = "";
    } else {
        alert("Please enter a task");
    }
});