//business logic
function Pizza(first,pizza,size,crust,delivery){
    this.firstName = first;
    this.pizzaType = pizza;
    this.size = size;
    this.toppings = [];
    this.crust = crust;
    this.deliveryMethod = delivery;
  };

  Pizza.prototype.fullOrder = function(){
      return  "Hello " + this.firstName + " your order is " + this.pizzaType + ", " + this.size + " size, with " + this.toppings + " and " + this.crust + " crust, " + this.deliveryMethod ;
}
function resetFields(){
    $('#new-first-name').val("");
    $("input[name ='pizza-size']:checked").val("");
    $("input[name='pizza-topping']:checked").val(""); 
}

// user interface

$(document).ready(function(){
    $("#add-order").click(function(){
        $('.another-form').append('<div class="pizza-type">'+
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
                                '<div class="form-group">' +
                                    '<h3>Size</h3>' +
                                    '<select class="form-control" id="size">' +
                                        '<option value="">Select size</option>' +
                                        '<option value="1000">Large</option>'+
                                        '<option value="850">Medium</option>'+
                                        '<option value="550">Small</option> '+
                                    '</select>'+
                                '</div>' +
                                    '<br>' +
                                    '<div id="new-order">' +
                                     '<div class="checkbox size">'+
                                        '<h4>Toppings</h4>' +
                                        '<label class="checkbox-inline">' +
                                            '<input type="checkbox" id="small" value="Extra cheese" class="size" name="pizza-topping1">Cheese</label>' +
                                        '<label class="checkbox-inline">' +
                                            '<input type="checkbox" id="medium" value="Extra meat" class="size" name="pizza-tppping2">Meat</label>' +
                                        '<label class="checkbox-inline">' +
                                            '<input type="checkbox" id="large" value="Extra veggies" class="size" name="pizza-topping3">Veggies</label>' +
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
                                    '</div>' +
                                    '<br>' +
                                    '<div id="delivery">' +
                                      '<h3>Delivery</h3>' +
                                      '<select class="form-control" id="delivery-method">' +
                                        '<option>delivered</option>' +
                                        '<option>picked-up</option>' +
                                      '</select>' +
                                    '</div>')
    });

    $("form#order").submit(function(){
        event.preventDefault();
        var inputedFirstName = $('#new-first-name').val(),
            pizzaType = $('#p-type').val(),
            yourSize =  parseInt($("#size").val()),
            yourToppings = [],
            theCrust = parseInt($('#crust').val()),
            yourDel = $("#delivery-method").val(),
            
            newPizza = new Pizza(inputedFirstName,pizzaType,yourSize,theCrust,yourDel);
            console.log(newPizza);

            var x = 0;

            $("input[name='pizza-topping']:checked").each(function(){
                yourToppings.push($(this).val())
                x = x + $(this).val();
            });
            newPizza.toppings.push(yourToppings);


            var total = (yourSize) + (x) + (theCrust);
            alert(total)

            resetFields();


    if(yourDel == "delivered"){
        alert(total = total + 100);
    }
    alert(total);

    $("#output").text(newPizza.fullOrder());
    });

    $('#meat-deluxe').hover(function(){
        $('#Deluxe-back').toggle();
    });

    $('#hawaii').hover(function(){
        $('#hawa-back').toggle();
    });

    $('#italy').hover(function(){
        $('#italy-back').toggle();
    });

    $('#mush').hover(function(){
        $('#pep-back').toggle();
    });
});