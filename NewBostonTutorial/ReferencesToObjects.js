//https://www.youtube.com/watch?v=kNHrHSTYs1U&t=203s
var niall = {
    favTeam: "Liverpool",
    favDrink: "Tea"
};

/*
This makes a reference, not a copy
so when the value is changed in person
it also changes the value in niall
*/
var person = niall;
person.favDrink = "Water";
console.log(niall.favDrink); 

//Difference between == and ===
/*
== compares values
*/
console.log(19 == '19'); //true
/*
=== compares type
*/
console.log(19 === '19'); //false