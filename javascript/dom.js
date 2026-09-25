// Function to demonstrate alert dialog box
function greet(){
    let name = prompt("Hello! What's your name?")
    if(name != '' && name != null){
        alert(`Greetings ${name}, you are welcome`)
    }else{
        alert("Hello anonymouse welcome.");
    }
}

// Function to demonstrate confirm dialog box
function confirmAction(){
    let result = confirm("Are you sure you want to continue?");
    let elem = document.getElementById("output");
    if(result){
        elem.innerHTML = "Yeeh! You agreed to continue.";
        elem.style.backgroundColor = "teal";
        elem.style.borderColor = "green"
    }else{
        elem.innerHTML = "Oops! You canceled the action.";
        elem.style.backgroundColor = "salmon";
        elem.style.borderColor = "red"
    }
}

// Function to demonstrate prompt dialog box
function promptAction(){
    let name = prompt("Please enter your name:", "John Doe");
    let elem = document.getElementById("output");
    if(name != null && name != ""){
        elem.innerHTML = `Hello ${name}, welcome to our website!`;
        // remove the style attribute to reset the background color and border color
        elem.removeAttribute("style");
    }
}






function displayFruitInfo() {
    const fruitSelect = document.getElementById('fruitSelect');
    const selectedFruit = fruitSelect.value;
    const output = document.getElementById('output');

    switch (selectedFruit) {
        case 'apple':
            output.textContent = 'Apples are red or green and are rich in fiber.';
            break;
        case 'banana':
            output.textContent = 'Bananas are yellow and are a good source of potassium.';
            break;
        case 'cherry':
            output.textContent = 'Cherries are small, round, and typically red or black.';
            break;
        case 'date':
            output.textContent = 'Dates are sweet fruits that grow on date palm trees.';
            break;
        default:
            output.textContent = '';
    }
}

// document.addEventListener('DOMContentLoaded', displayFruitInfo);
