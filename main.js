$(document).ready( function() {
    $.ajax({
        'url' : "https://flynn.boolean.careers/exercises/api/array/music",
        'method' : "GET",
        'success' : function(data) {
            // get records from api
            var record = data.response;
            // get html from record card template
            var template_record_html = $('#record-card').html();
            // ready the function
            var template_function = Handlebars.compile(template_record_html);
            for( var i = 0; i < record.length; i++) {
                // set the object inside the template
                var template_final = template_function(record[i]);
                // append card to container
                $('.records-wrapper').append(template_final);
            };
        },
        'error' : function() {
            alert('Si è verificato un errore.');
        }
    });
});