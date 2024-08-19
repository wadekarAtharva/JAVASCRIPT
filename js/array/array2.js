const marvel_heros=["thor","Ironman","spiderman"];
const dc_heros=["superman","flash","batman"];

// marvel_heros.push(dc_heros);

// adds the array in the first array does not merge so use concat

// console.log(marvel_heros);
// console.log(marvel_heros[3])
// console.log(marvel_heros[3][1])

const allHeros=marvel_heros.concat(dc_heros);

console.log(allHeros);

// use spread to merge multiple arrays together
const all_new_heros=[...marvel_heros,...dc_heros];

console.log(all_new_heros)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
// to separate each array and make all in one array
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);

// to check array
console.log(Array.isArray("Atharva"));
//to convert into array
console.log(Array.from("Atharva"));


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));
