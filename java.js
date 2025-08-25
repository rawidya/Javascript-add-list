        // const button = document.getElementById("clickme");
        // const teks = document.getElementById("textme");
        // const list = document.getElementById("list");
        

        // button.addEventListener("click",function (){
        //     const teksv = teks.value;
        //     if(teksv.trim() !==""){
        //         const li = document.createElement("li");
        //         li.textContent = teksv;
        //         list.appendChild(li);
        //         teks.value = "";

        //     }else {
        //         alert("Please enter a task");
        //     }
        // });
       const button = document.getElementById("clickme");
const teks = document.getElementById("textme");
const list = document.getElementById("list");

button.addEventListener("click", function() {
    const teksv = teks.value.trim();
    
    if (teksv !== "") {
        const cardNote = document.createElement("div");
        cardNote.className = "card-note";
        const paragraph = document.createElement("p");
        paragraph.textContent = teksv;
        cardNote.appendChild(paragraph);
        list.appendChild(cardNote);
        
        teks.value = "";
    } else {
        alert("Please enter a task");
    }
});