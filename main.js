$(document).ready( function() {
    // ajax call to get a list of records
    $.ajax({
        'url' : "https://flynn.boolean.careers/exercises/api/array/music",
        'method' : "GET",
        'success' : function(data) {
            // get records from api
            var records = data.response;
            // get html from record card template
            var template_record_html = $('#record-card').html();
            // ready the function
            var template_function = Handlebars.compile(template_record_html);
            for(var i = 0; i < records.length; i++) {
                // select a specific record
                var record = records[i];
                // get info from api
                var poster = record.poster;
                var title = record.title;
                var author = record.author;
                var genre = record.genre;
                var year = record.year;
                // store info in an object
                var context = {
                    'record_poster' : poster,
                    'record_title' : title,
                    'record_author' : author,
                    'record_genre' : genre,
                    'record_year' : year
                }
                // set the object inside the template
                var template_final = template_function(context);
                // append card to container
                $('.records-wrapper').append(template_final);
            };
        },
        'error' : function() {
            alert('Si è verificato un errore.');
        }
    });

    $('#genre').change(function() {
        // get chosen genre
        var chosen_genre = $('#genre :selected').val();
        // loop for the number of records to show a specific genre
        for(var i = 0; i < $('.record').length; i++) {
            // if the chosen genre isn't 'All'
            if(chosen_genre != 'all') {
                // get current record genre 
                var record_genre = $('.genre').eq(i).text().toLowerCase();
                // if current record genre equals chosen genre
                if(record_genre == chosen_genre) {
                    // show that record
                    $('.genre').eq(i).parent().addClass('active');
                } else {
                    // hide that record
                    $('.genre').eq(i).parent().removeClass('active');
                }
            // if chosen genre is 'All'
            } else {
                // show every record
                $('.genre').eq(i).parent().addClass('active');
            }
        }
    });
});