//business logic
function Pizza(first,pizza,size,crust,delivery){
    this.firstName = first;
    this.pizzaType = pizza;
    this.size = size;
    this.toppings = [];
    this.crust = crust;
    this.deliveryMethod = delivery;
    this.order = function(){
      return this.firstName + " the order will be delivered at your doorstep. Thanks for choosing us!"
    };
  }


// user interface

$(document).ready(function(){
    $("#add-order").click(function(){
        $('#new-order').append(
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
                                            '<input type="checkbox" id="small" value="small" name = "pizza-size">Small</label>' +
                                        '<label class="checkbox-inline">' +
                                            '<input type="checkbox" id="medium" value="medium" name = "pizza-size">Medium</label>' +
                                        '<label class="checkbox-inline">' +
                                            '<input type="checkbox" id="large" value="large" name = "pizza-size">Large</label>' +
                                    '</div>' +
                                    '<br>' +
                                    '<div id="new-order">' +
                                     '<div class="checkbox size">'+
                                        '<h4>Size</h4>' +
                                        '<label class="checkbox-inline">' +
                                            '<input type="checkbox" id="small" value="small" class="size" name="pizza-size">Small</label>' +
                                        '<label class="checkbox-inline">' +
                                            '<input type="checkbox" id="medium" value="medium" class="size" name="pizza-size">Medium</label>' +
                                        '<label class="checkbox-inline">' +
                                            '<input type="checkbox" id="large" value="large" class="size" name="pizza-size">Large</label>' +
                                    '</div>' +
                                    '<br>' +
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
            yourToppings = $("input[name ='pizza-topping']:checked").val(),
            theCrust = $('#crust').val(),
            yourDel = $("#delivery-method").val(),
            
            newPizza = new Pizza(inputedFirstName,pizzaType,yourSize,theCrust,yourDel);
            newPizza.toppings.push(yourToppings);
            console.log(newPizza);

            var total = 0;

    // if(pizzaType == "Hawaiian" || pizzaType == "Pepporoni" || pizzaType == "Meat Deluxe" || pizzaType == "Italian Fiesta(Fan favorite)" || pizzaType == "Vegeterian" || yourSize == "Large" || theCrust == "Crispy"){
    //     total = 1200;    
    // }
    if(pizzaType == "Hawaiian" || pizzaType == "Pepporoni" || pizzaType == "Meat Deluxe" || pizzaType == "Italian Fiesta(Fan favorite)" || pizzaType == "Vegeterian" && yourSize == "Medium" || theCrust == "Crispy"){
        total = 950;
    }
    // else if(pizzaType == "Hawaiian" || pizzaType == "Pepporoni" || pizzaType == "Meat Deluxe" || pizzaType == "Italian Fiesta(Fan favorite)" || pizzaType == "Vegeterian" || yourSize == "Small" || theCrust == "Crispy"){
    //     total = 750;
    // }
    // else if(pizzaType == "Hawaiian" || pizzaType == "Pepporoni" || pizzaType == "Meat Deluxe" || pizzaType == "Italian Fiesta(Fan favorite)" || pizzaType == "Vegeterian" || yourSize == "Large" || theCrust == "Stuffed"){
    //     total = 1500; 
    // }       
    // else if(pizzaType == "Hawaiian" || pizzaType == "Pepporoni" || pizzaType == "Meat Deluxe" || pizzaType == "Italian Fiesta(Fan favorite)" || pizzaType == "Vegeterian" || yourSize == "Medium" || theCrust == "Stuffed"){
    //     total = 1000;
    // }
    // else if(pizzaType == "Hawaiian" || pizzaType == "Pepporoni" || pizzaType == "Meat Deluxe" || pizzaType == "Italian Fiesta(Fan favorite)" || pizzaType == "Vegeterian" || yourSize == "Small" || theCrust == "Stuffed"){
    //     total = 950;
    // }
    // else if(pizzaType == "Hawaiian" || pizzaType == "Pepporoni" || pizzaType == "Meat Deluxe" || pizzaType == "Italian Fiesta(Fan favorite)" || pizzaType == "Vegeterian" || yourSize == "Large" || theCrust == "Gluten free"){
    //     total = 1500;
    // }
    // else if(pizzaType == "Hawaiian" || pizzaType == "Pepporoni" || pizzaType == "Meat Deluxe" || pizzaType == "Italian Fiesta(Fan favorite)" || pizzaType == "Vegeterian" || yourSize == "Medium" || theCrust == "Gluten free"){
    //     total = 1000;
    // }
    // else if(pizzaType == "Hawaiian" || pizzaType == "Pepporoni" || pizzaType == "Meat Deluxe" || pizzaType == "Italian Fiesta(Fan favorite)" || pizzaType == "Vegeterian" || yourSize == "Small" || theCrust == "Gluten free"){
    //     total = 950;
    // }
    else if(yourToppings == "Extra meat" || yourToppings == "Extra veggies" || yourToppings == "Extra cheese"){
        total = total + 300;
    }
    else if(yourDel == "Delivery"){
        total = total + 100;
    }
    // alert("Hi " + newPizza.firstName + " we have received your order and it is being processed.");
    // alert(" Your order is " + newPizza + " and this totals to " + total);
    alert(total);
    });
});