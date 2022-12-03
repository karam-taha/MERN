//1:
console.log(example);
let example = "I'm the example!"; //it wont read the example inside console.log

//2:
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';  //it will print magnet
    console.log(needle);
}

//3:
var brendan = 'super cool';
function print(){   //function never gets called
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);  //will print super cool

//4:
var food = 'chicken';
console.log(food);  //prints chicken
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);  //prints half-chicken
    var food = 'gone';
}

//5:
mean();     //will run function and print chicken 2 times
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//6:
console.log(genre);     //will print disco
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);     //will print rock
    var genre = "r&b";
    console.log(genre);     //will print rock
}
console.log(genre);     //will print disco

//7:
dojo = "san jose";
console.log(dojo);  //print san jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);  //prints seattle
    var dojo = "burbank";
    console.log(dojo);  //prints burbank
}
console.log(dojo);  //print san jose

//8:
console.log(makeDojo("Chicago", 65));   //will run function and print true
console.log(makeDojo("Berkeley", 0));   //will run function and print closed for now
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.hiring = "closed for now";
    }
    return dojo;
}
