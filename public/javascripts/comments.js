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

        $('#edit_Comment').click((event) => {
          console.log('I was clicked!');
            event.preventDefault()
            const id = $('#comment_id').val()
            const posts_id = $('#posts_id').val()
            const title = $('#edit_comment_title').val()
            const comment = $('#edit_comment').val()
            console.log('Id:', id);
            console.log('Posts Id:', posts_id);
            console.log('Title:', title);
            console.log('Comment:', comment);
            $.ajax({
                contentType: 'application/json',
                url: `/editcomment/${id}`,
                method: 'PUT',
                dataType: 'json',
                data: JSON.stringify({
                    id,
                    posts_id,
                    title,
                    comment
                }),
            }).done(() => {
                console.log('made it to done')
                window.location = `/comment/${id}`
            }).fail(err => {
                console.log(err)
            })
        })

});
