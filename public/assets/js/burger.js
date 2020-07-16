$(function(){

    $('.create-form').on('submit', function(event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $('#newburger').val().trim(),
            devoured: 0
        };

        $.ajax('/api/burgers', {
            type: 'post',
            data: newBurger
        }).then(function(){
            console.log('New Burger Added');
            location.reload();
        });
    });
$('.eatburger').on('click', function(event){
    event.preventDefault();
    let id = $(this).data('id');
    let devouredState = {
        devoured: 1
    };
    $.ajax('/api/burgers/' + id, {
        type: 'PUT',
        data: devouredState
    }).then(function(){
        console.log('Burger Devoured');
        location.reload();    
        });
    });
$('.trashburger').on('click', function(event){
    event.preventDefault();
    let id = $(this).data('id');

    $.ajax({
        type: 'DELETE',
        url: '/api/burgers/' + id
    }).then(location.reload());
});
});