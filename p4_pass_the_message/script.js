const InputTextField = document.getElementById("message-input");

InputTextField.addEventListener("keydown", 
function(event){
    if(event.key == "Enter"){
        getMessage();
    }
});

function getMessage(){
    document.getElementById("message-output").innerHTML = InputTextField.value;
    InputTextField.value = "";
}