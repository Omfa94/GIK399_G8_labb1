const checkbox = document.getElementById("divStyle");

//det kommer att hämta alla element med klassen 'textfield'
const textfields = document.querySelectorAll(".textfield");

// Detta kommer att hämta en HTMLCollection av alla element med klassen button
const btn = document.getElementsByClassName("button");

// Detta kommer att hämta första elementet med klassen empty_div
const emptyDiv = document.querySelector(".empty_div");


//eventlyssnare till alla textfields
textfields.forEach((field) => field.addEventListener("change", handleInputChange));
function handleInputChange(e) {
    // Skriv ut event.target till konsolen
    console.log('Event target:', e.target);
    const inputName = e.target.name;    
    console.log("Input name attribute: ", inputName);
    // Kontrollera om det element som orsakade eventet har 'name'-attributet 'content'
    if (inputName === 'content') {
      // Skriv ut värdet i 'content'-inputfältet till det första 'div'-elementet med klassen 'empty_div'
      emptyDiv.innerHTML = e.target.value;
    
    }
}

checkbox.addEventListener("change",function(e){
    console.log('chekcbox clicked', e);
    const colorField = document.getElementById("color");
    
    if (checkbox.checked){
        emptyDiv.style.backgroundColor=colorField.value;
    }else{
        emptyDiv.style.backgroundColor="";
    }
});

const deleteButton = document.getElementById("deleteButton");

deleteButton.addEventListener("click", function() {
    emptyDiv.innerHTML = ''; // Detta tar bort allt innehåll inuti div-elementet
});


