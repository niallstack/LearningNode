//https://www.youtube.com/watch?v=KsjrN-T3ZCs&t=617s
function placeAndOrder(orderNo){
    console.log("Customer Order: ", orderNo);
    cookAndDeliver(function(){
        console.log("Delivered food order: ", orderNo);
    });
}

//Simulate 5 second operation
function cookAndDeliver(callback){
    setTimeout(callback, 5000);
}

//Simulate users web request
placeAndOrder(1);
placeAndOrder(2);
placeAndOrder(3);
placeAndOrder(4);
placeAndOrder(5);