$(document).ready(function() {
    console.log("I'm listening");

    $('.modal-trigger').leanModal();

        $('#edit_Post').click((event) => {
          console.log('I was clicked!');
            event.preventDefault()
            const id = $('#posts_id').val()
            const title = $('#edit_post_title').val()
            const content = $('#edit_content').val()
            console.log('Id:', id);
            console.log('Title:', title);
            console.log('Content:', content);
            $.ajax({
                contentType: 'application/json',
                url: `/comment/${id}`,
                method: 'PUT',
                dataType: 'json',
                data: JSON.stringify({
                    title,
                    content
                }),
            }).done(() => {
                console.log('made it to done')
                window.location = `/comment/${id}`
            }).fail(err => {
                console.log(err)
            })
        })

});
