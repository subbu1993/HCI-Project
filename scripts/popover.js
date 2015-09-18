$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
    $('#find_a_class').popover({
        placement : 'bottom',
        title : 'Find a class',
        content : '<img src="images/find_a_class.png" height="100" width="100"/>',
        html : true
    });
    $('#find_a_professor').popover({
        placement : 'bottom',
        title : 'Find a prof',
        content : '<img src="images/find_a_professor.jpg" height="100" width="100"/>',
        html : true
    });
    $('#find_a_service').popover({
        placement : 'bottom',
        title : 'Find a service',
        content : '<img src="images/find_a_service.jpg" height="100" width="100"/>',
        html : true
    });
    $('#order_food').popover({
        placement : 'bottom',
        title : 'Munch time',
        content : '<img src="images/order_food.jpg" height="100" width="100"/>',
        html : true
    });
});
