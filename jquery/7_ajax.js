
// addClass, removeClass, ToggleClass
// hide, show, fadeIn, fadeOut -> delay function
// :gt 

$(function() {


    $.ajax( {
        
        type:'GET',
        url : 'https://jsonplaceholder.typicode.com/users/1',
        success : function(data) {
            // $('p').append( 'USER NAME : '+ data.username)
        },
        error : function() {
            console.log('error occured')
        }

    } )


    $('#btn').click( function() {

        $.ajax( {
        
            type:'GET',
            // url : 'https://jsonplaceholder.typicode.com/users/'+$('#ip').val(),
            url : 'https://jsonplaceholder.typicode.com/users?email='+$('#ip').val(),
            success : function(data) {
                console.log(data)
                console.log(data[0])
                $('p').append( ' EMAIL : '+ data[0].email)
                
            },
            error : function() {
                console.log('error occured')
            }
    
        } )
    })
})