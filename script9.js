$(document).ready(function(){
    $('#size').on('change', function() {
        var size = $('#size').val();
        console.log(size);
        if(size=='selt')
        {
            $('#price').text(" ");
        }
        if(size=='small')
        {
            $('#price').text("Rs.1000");
        }
        if(size=='medium')
        {
            $('#price').text("Rs.1100");
        }
        if(size=='large')
        {
            $('#price').text("Rs.1200");
        }
        if(size=='x-large')
        {
            $('#price').text("Rs.1300");
        }
    });
    $('#color').on('change', function() {
        var color = $('#color').val();
        console.log(size);
        if(color=='selt1')
        {
            $('#price1').text(" ");
        }
        if(color=='red')
        {
            $('#price1').text("Rs.1200");
        }
        if(color=='black')
        {
            $('#price1').text("Rs.1400");
        }
        if(color=='orange')
        {
            $('#price1').text("Rs.1600");
        }
        if(color=='blue')
        {
            $('#price1').text("Rs.1800");
        }
    });
        
});