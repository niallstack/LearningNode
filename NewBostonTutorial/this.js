//https://www.youtube.com/watch?v=uiZxziF4Ol8
var niall = {
    printFirstName: function(){
        console.log("My name is Niall");
        console.log(this === niall);
    }
};
niall.printFirstName();

//THe default calling context is global
function doSomething(){
    console.log("Something");
    console.log(this === global);
}
doSomething();