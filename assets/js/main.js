$(function(){   //doc ready

    var cast= {
        "characters": [
            {"name":"Pippo", "cognome": "Palombo"}, 
            {"name":"Pluto", "cognome": "Bianchi"}, 
            {"name":"Paperino", "cognome": "Luchino"}, 
        ]
    }

    var template= $('#template-container').html();
    var compiledTemplate = Handlebars.compile(template);
    $('#list-container').html(compiledTemplate(cast.characters));
});