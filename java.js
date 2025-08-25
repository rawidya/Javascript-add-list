const button = document.getElementById("clickme");
const teks = document.getElementById("textme");
const list = document.getElementById("list");

button.addEventListener("click", function() {
    const teksv = teks.value.trim();

    if (teksv !== "") {
        const cardNote = document.createElement("div");
        cardNote.className = "card-note";

        const spanText = document.createElement("span");
        spanText.textContent = teksv;
        cardNote.appendChild(spanText);

        const divButton = document.createElement("div");

        const buttonEdit = document.createElement("button");
        buttonEdit.textContent = "Edit";
        buttonEdit.style.backgroundColor = "blue";
        divButton.appendChild(buttonEdit);

        const buttonDelete = document.createElement("button");
        buttonDelete.textContent = "Delete";
        buttonDelete.style.backgroundColor = "red";
        divButton.appendChild(buttonDelete);

        cardNote.style.display = "flex";
        cardNote.style.justifyContent = "space-between";
        cardNote.appendChild(divButton);

        list.appendChild(cardNote);

        teks.value = "";

        // Edit
        buttonEdit.addEventListener("click", function() {
            const inputEdit = document.createElement("input");
            inputEdit.type = "text";
            inputEdit.value = spanText.textContent;
            cardNote.insertBefore(inputEdit, spanText);
            cardNote.removeChild(spanText);

            buttonEdit.textContent = "Update list";
            buttonEdit.style.backgroundColor = "green";

            buttonEdit.onclick = function() {
                spanText.textContent = inputEdit.value;
                cardNote.insertBefore(spanText, inputEdit);
                cardNote.removeChild(inputEdit);

                buttonEdit.textContent = "Edit";
                buttonEdit.style.backgroundColor = "blue";
                buttonEdit.onclick = null;
                buttonEdit.addEventListener("click", arguments.callee);
                
            };
        });
        // Delete
         buttonDelete.addEventListener("click", function() {
            cardNote.remove();});

    } else {
        alert("Please enter a task");
    }
});