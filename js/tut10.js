console.log('This is tut10')
function print_message(message){
    console.log(message)
}
print_message('Hello world');


let name='atharva';
function greet(name){
    console.log(`Good morning,${name}`)
}
greet(name);

// how to return a string
let val=greet(name);
let string='atharva';
function greet(string){
    console.log(`Good morning,${string}`)
    return 1;
}
greet(name);
