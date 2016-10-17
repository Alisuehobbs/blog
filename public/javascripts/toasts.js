$(document).ready(function(){
  console.log("I'm listening for your toasts");

  $('#new_post').on('click', (event) => {
    event.preventDefault();
    const title = $('#title').val();
    const content = $('#content').val();
    console.log("title:", title);
    console.log("content:", content);
    if(!title || !content) {
      return Materialize.toast('Please fill out the title and content fields.', 4000)
    } else {
      $(this).unbind(event)
    }
  })


});
