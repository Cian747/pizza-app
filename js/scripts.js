//business logic



// user interface

$(document).ready(function(){
    $("#add-order").click(function(){
        $('#new-order').append('<div class="pizza-type">'+
                                '<h4>Pizza type:</h4>' +
                                    '<select class="form-control">' +
                                        '<option>Haiwaiian</option>' +
                                        '<option>Pepporoni</option>' +
                                        '<option>Meat Deluxe</option>' +
                                        '<option>Italian Fiesta</option>' +
                                        '<option>Vegetarian</option>' +
                                        '</select>' +
                                '</div>' +
                                '<br>' +
                                '<div id="new-order">' +
                                    '<div class="checkbox-inline">' +
                                        ' <h4>Size</h4>' +
                                        '<label class="checkbox-inline">' +
                                            '<input type="checkbox" id="small" value="option1">Small</label>' +
                                        '<label class="checkbox-inline">' +
                                            '<input type="checkbox" id="medium" value="option1">Medium</label>' +
                                        '<label class="checkbox-inline">' +
                                            '<input type="checkbox" id="large" value="option1">Large</label>' +
                                    '</div>' +
                                    '<br>' +
                                    '<div class="toppings">' +
                                        '<h4>Toppings</h4>' +
                                        '<select class="form-control">' +
                                            '<option>Extra cheese</option>' +
                                            '<option>Extra meat</option>' +
                                            '<option>Extra veggies</option>' +
                                        '</select>' +
                                    '</div>' +
                                    '<br>' +
                                    '<div class="crust">' +
                                        '<h4>Type of Crust' +
                                            '<select class="form-control">' +
                                                '<option>Crispy</option>' +
                                                '<option>Stuffed</option>' +
                                                '<option>Glutten free</option>' + 
                                            '</select>' +
                                    '</div>')
    });

    $("#")
});