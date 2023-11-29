//Uppgift 4

const box = document.getElementById("divStyle");

//hämta alla element med klassen 'textfield'
const textfields = document.querySelectorAll(".textfield");

// hämta en HTMLCollection av alla element med klassen button??

const buttons = document.getElementsByTagName("button");

//hämta första elementet med klassen empty_div
const emptyDiv = document.querySelector(".empty_div");

// uppgifft 5
function handleInputChange(e) {
    // Skriv ut event.target till konsolen
    console.log('Event target:', e.target);

    const name = e.target.name;    
    console.log("Input name attribute: ", name);

    // Kontrollera om det element som orsakade eventet har 'name'-attributet 'content'
    if (name=== 'content') {
      // Skriv ut värdet i 'content'-inputfältet till det första 'div'-elementet med klassen 'empty_div'
      emptyDiv.innerHTML = e.target.value;
    
    }
   
    } 
    
// uppgit 6 Notera: input-fältet finns redan lagrat i en samling???
textfields.forEach(textfield=>{
    if(textfield.name=="color"){
        box.addEventListener("change",function(){
            emptyDiv.style.backgroundColor=textfield.value;
        });
    }
});


//eventlyssnare till alla textfields
textfields.forEach((textfield) => textfield.addEventListener("change", handleInputChange));
   



buttons[0].addEventListener("click", function() {
    emptyDiv.innerHTML = ''; // Detta tar bort allt innehåll inuti div-elementet
    
});

