// const coding=["js","ruby","python","cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item)
        // return item 
// })

// console.log(values);

// we have to manually return but it does not return value


// foreach do not return vlaue therefore we use filter
const myNums=[1,2,3,4,5,6,7,8,9,10];


// const newNums =myNums.filter((num)=>num>4) //implict return

const newNums =myNums.filter((num)=>{
    return num>4
}) //we have to use return when we do explicit return
// console.log(newNums);


// to iterate with help of foreach
const newNumss=[]

myNums.forEach((num)=>{
    if(num>4){
        newNumss.push(num)
    }
})

// console.log(newNumss);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  let userBooks = books.filter((bk)=> bk.genre === 'History' )

   userBooks= books.filter((bk)=>{
    return bk.publish >=1995 && bk.genre ==="History"
   })
//   console.log(userBooks);


// -----------------  maps--------------------------------

const myNumbers=[1,2,3,4,5,6,7,8,9,10]

// const newNumbers=myNumbers.map((num)=> num+10)

// channing
const newNumbers=myNumbers
                    .map((num)=> num*10)
                    .map((num)=>num+1)
                    .filter((num)=> num >=40)

console.log(newNumbers);

// -----------------  reduce ------------------------------

const mynums=[1,2,3]

const myTotal =mynums.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currval:${currval}`);
    return acc + currval
},0)
// acc: 0 and currval:1
// acc: 1 and currval:2
// acc: 3 and currval:3
// 6

console.log(myTotal);


// arrow function
const mySum = mynums.reduce((acc,curr)=>(acc+curr),0)
console.log(mySum);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const priceToPay=shoppingCart.reduce((acc,item)=> acc + item.price,0)

console.log(priceToPay)