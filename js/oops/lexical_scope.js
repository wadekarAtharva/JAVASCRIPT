function outer() { 
    let name = "John"; // Outer function variable 
  
    function inner() { 
        console.log("Hello " + name); 
    } 
  
    inner(); // Output: "Hello John" 
} 
  
outer();

