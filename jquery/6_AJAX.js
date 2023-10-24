$(function() {
    console.log('did not entered ajax')
    $.ajax( {
        
        type:'GET',
        url : 'https://jsonplaceholder.typicode.com/users',
        success : function(data) {
            $.each(data, function(i, item) {
                $('table').append( '<tr><td>'+item.name+'</td><td>'+item.username+'</td><td>'+item.email+'</td></tr>' )
                console.log(item)
                console.log(data)
            })
        },
        error : function() {
            console.log('error occured')
        }

    } )
})