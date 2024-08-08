const button1 = document.querySelectorAll("button");
const inputField = document.getElementById("result");

for(let i = 0; i < button1.length; i++){
    button1[i].addEventListener("click", () =>{
        const buttonValue = button1[i].textContent;
        if(buttonValue === "C"){
            clearResult();
        } else if (buttonValue === "="){
            calculateResult();
        }else{
            appendValue(buttonValue);
        }
    });
}
function clearResult(){
    inputField.value = "";
}
function calculateResult(){
    inputField.value = eval(inputField.value);
}
function appendValue(buttonValue){
    inputField.value += buttonValue;
}