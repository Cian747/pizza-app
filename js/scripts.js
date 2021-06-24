//business logic
function Pizza(first,pizza,size,toppings,crust,delivery){
    this.firstName = first;
    this.pizzaType = pizza;
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
    this.deliveryMethod = delivery;
    this.order = function(){
      console.log(first + " the order will be delivered at your doorstep. Thanks for choosing us!")
    };
  }


// user interface

$(document).ready(function(){
    $("#add-order").click(function(){
        $('#new-order').append(''+
                            '<div class="pizza-type">'+
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

    $("form#order").submit(function(){
        event.preventDefault();
        var inputedFirstName = $('#new-first-name').val(),
            pizzaType = $('#p-type').val(),
            yourSize = $("input[name ='pizza-size']:checked").val(),
            yourToppings = $('#top').val(),
            theCrust = $('#crust').val(),
            yourDel = $("#delivery-method").val(),
            
            newPizza = new Pizza(inputedFirstName,pizzaType,yourSize,yourToppings,theCrust,yourDel);
            console.log(newPizza);

            var total = 0;


    if(pizzaType == "Hawaiian" || pizzaType == "Pepporoni" || pizzaType == "Meat Deluxe" || pizzaType == "Italian Fiesta(Fan favorite)" || pizzaType == "Vegeterian" || yourSize == "Large" || theCrust == "Crispy"){
        total = 1200;    
    }
    if(pizzaType == "Hawaiian" || pizzaType == "Pepporoni" || pizzaType == "Meat Deluxe" || pizzaType == "Italian Fiesta(Fan favorite)" || pizzaType == "Vegeterian" || yourSize == "Medium" || theCrust == "Crispy"){
        total = 950;
    }
    if(pizzaType == "Hawaiian" || pizzaType == "Pepporoni" || pizzaType == "Meat Deluxe" || pizzaType == "Italian Fiesta(Fan favorite)" || pizzaType == "Vegeterian" || yourSize == "Small" || theCrust == "Crispy"){
        total = 750;
    }
    if(pizzaType == "Hawaiian" || pizzaType == "Pepporoni" || pizzaType == "Meat Deluxe" || pizzaType == "Italian Fiesta(Fan favorite)" || pizzaType == "Vegeterian" || yourSize == "Large" || theCrust == "Stuffed"){
        total = 1500; 
    }       
    if(pizzaType == "Hawaiian" || pizzaType == "Pepporoni" || pizzaType == "Meat Deluxe" || pizzaType == "Italian Fiesta(Fan favorite)" || pizzaType == "Vegeterian" || yourSize == "Medium" || theCrust == "Stuffed"){
        total = 1000;
    }
    if(pizzaType == "Hawaiian" || pizzaType == "Pepporoni" || pizzaType == "Meat Deluxe" || pizzaType == "Italian Fiesta(Fan favorite)" || pizzaType == "Vegeterian" || yourSize == "Small" || theCrust == "Stuffed"){
        total = 950;
    }
    if(pizzaType == "Hawaiian" || pizzaType == "Pepporoni" || pizzaType == "Meat Deluxe" || pizzaType == "Italian Fiesta(Fan favorite)" || pizzaType == "Vegeterian" || yourSize == "Large" || theCrust == "Gluten free"){
        total = 1500;
    }
    if(pizzaType == "Hawaiian" || pizzaType == "Pepporoni" || pizzaType == "Meat Deluxe" || pizzaType == "Italian Fiesta(Fan favorite)" || pizzaType == "Vegeterian" || yourSize == "Medium" || theCrust == "Gluten free"){
        total = 1000;
    }
    if(pizzaType == "Hawaiian" || pizzaType == "Pepporoni" || pizzaType == "Meat Deluxe" || pizzaType == "Italian Fiesta(Fan favorite)" || pizzaType == "Vegeterian" || yourSize == "Small" || theCrust == "Gluten free"){
        total = 950;
    }
    if(yourToppings == "Extra meat" || yourToppings == "Extra veggies" || yourToppings == "Extra cheese"){
        total = total + 300;
    }
    alert(total);
    });
});