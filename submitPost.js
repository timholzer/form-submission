
$(document).ready(function(){

    $("#submit").on('click', function(){
        event.preventDefault();
   let formData = {
        "emailConsent": true,
        "birthDate": $('input[name=birthDate]').val(),
        "email": $('input[name=email]').val(),
        "name": $('input[name=name]').val(),
        "id": 1
        
        
    };
//console.log(formData);
    

    //    $.ajax({
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     url: 'https://url.com/users/register', 
    //     type : "POST", 
    //     dataType : 'json', 
    //     data : JSON.stringify(formData), 
    //     success : function(result) {

    //         console.log(result);
    //     },
    //     error: function(xhr, resp, text) {
    //         console.log(xhr, resp, text);
    //     }
    //  })
});
});