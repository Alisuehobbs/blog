$(document).ready(function() {
    console.log("I'm listening");

    $('.modal-trigger').leanModal();

        $('#edit_Post').click((event) => {
            event.preventDefault()
            const id = $('#posts_id').val()
            const title = $('#edit_post_title').val()
            const content = $('#edit_content').val()
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
                window.location = `/comment/${id}`
            }).fail(err => {
                console.log(err)
            })
        })

        $('#edit_Comment').click((event) => {
            event.preventDefault()
            const id = $('#comment_id').val()
            const posts_id = $('#posts_id').val()
            const title = $('#edit_comment_title').val()
            const comment = $('#edit_comment').val()
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
                window.location = `/comment/${id}`
            }).fail(err => {
                console.log(err)
            })
        })

        $('#delete_post').click((event) => {
            event.preventDefault()
            console.log('I was clicked!');
            const id = $('#posts_id').val()
            $.ajax({
              contentType: 'application/json',
              url: `/comment/${id}`,
              method: 'DELETE',
            }).done(() => {
              window.location = '/posts'
            }).fail(err => {
              console.log(err)
            })
          })

        $('#delete_comment').click((event) => {
            event.preventDefault()
            console.log('I was clicked!');
            const id = $('#comment_id').val()
            $.ajax({
              contentType: 'application/json',
              url: `/editcomment/${id}`,
              method: 'DELETE',
            }).done(() => {
              window.location = `/comment/${id}`
            }).fail(err => {
              console.log(err)
            })
          })

});
