$(document).ready(function(){
  console.log("I'm listening TO EVERYTHING");

  Handlebars.registerHelper("content", (content) => {
    content = content.substr(0,200)
    return content
  })


});
