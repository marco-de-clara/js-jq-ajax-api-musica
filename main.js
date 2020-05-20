$(document).ready( function() {
    $.ajax({
        'url' : "https://flynn.boolean.careers/exercises/api/array/music",
        'method' : "GET",
        'success' : function(data) {
            // get records from api
            var record = data.response;
            console.log(record);
        },
        'error' : function() {
            alert('Si è verificato un errore.');
        }
    });
});