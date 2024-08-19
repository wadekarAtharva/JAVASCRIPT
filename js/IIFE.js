// Immediately Invoked function Expression(IIFE)

// Use to avoid global Pollution
// excuted as soon as fucntion is written


// ()()
// (Function)(Execution)
// ;  --> very important to end the context or will create a error

// named IIFE
(function chai(){
    console.log("DB Connected");

})();

// unamed IIFE 
((name)=>{
    console.log(`DB Connected 2 ${name}` );

})("Atharva")

