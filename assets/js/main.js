$(function(){   //doc ready

   $.ajax("./data/cast.json").done(function(cast){
       $('#list-container').html(compiledTemplate(cast));
   }); 

    var template= $('#template-container').html();
    var compiledTemplate = Handlebars.compile(template);
});