const email = document.getElementById("email");
const namebox = document.getElementById("name");
const checkbox = document.getElementById("flexCheck");
let checkboxvalid = false;
let emailvalid = false;

email.addEventListener('input', function (event){
    if (email.validity.valid) {
        emailvalid = true;
    }
    else
    {
        emailvalid = false;
    }
    checkvalid();
});

namebox.addEventListener('input', function (event){
    if (namebox.validity.valid) {
        namevalid = true;}
    else
    {
        namevalid = false;        
    }
    checkvalid();
});
checkbox.addEventListener('input', function (event){
    if (checkbox.checked) {
        checkboxvalid = true;  
    }
    else
    {
        checkboxvalid = false;        
    }
    checkvalid();
});    
function checkvalid(){
    if(namevalid && emailvalid && checkboxvalid){
        document.getElementById("submit").disabled = false;
    }
    else{
        document.getElementById("submit").disabled = true;
    }

}
    
