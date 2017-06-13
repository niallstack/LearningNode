//https://www.youtube.com/watch?v=IW2M8G8uJ6o&t=306s
function User(){
    this.userName = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer){
        targetPlayer.life += 1;
        this.life -= 1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
    }
}

var niall = new User();
var bob = new User();

niall.name = "Niall";
bob.name = "Bob";

niall.giveLife(bob);
console.log("Niall: " + niall.life);
console.log("Bob: "+ bob.life);

//You can add functions to all objects
User.prototype.punch = function punch(targetPlayer){
    targetPlayer.life -= 3;
    console.log(this.name + " punched " + targetPlayer.name);
}

bob.punch(niall);
console.log("Niall: " + niall.life);
console.log("Bob: "+ bob.life);

//You can add properties tp all objects
User.prototype.magic = 60;
console.log(niall.magic);
console.log(bob.magic);