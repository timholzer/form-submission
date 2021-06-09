
$(document).ready(function(){

    $("#submit").on('click', function(event){
        event.preventDefault();
        addClearMessage();
        //not sure if the 500 error I'm getting is an issue with my code or something on the server end.
        $.post("https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/users",
        {
            "emailConsent": true,
            "birthDate": $('input[name=birthDate]').val(),
            "email": $('input[name=email]').val(),
            "name": $('input[name=name]').val(),
            "id": 1
        });     
});
});
        
function addClearMessage(){
    document.getElementById("hidden").style.visibility = "visible";
    document.getElementById("regform").reset();
  
}
