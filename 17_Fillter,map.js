// const mycodeing =[
//     {
//         name:"abhi",
//         user: "vlogs"
//     },
//     {
//         name:"average",
//         user:"life"
//     },
//     {
//         name:"old",
//         user:"school"
//     },

// ]

// mycodeing.forEach( (item) =>{
//     console.log(item.name)
// } )

//********************************************** */

const mynums = [1,2,3,4,5,6,7,8]

const newNums = mynums.filter( (num) => {
           return num>4
})
console.log(newNums);

// important when this->{} we use we to use that return type 




// Reduce 

// const myNums =[1,2,3]

// const mytotal = myNums.reduce(function (acc,curl){
//     console.log(`acc: ${acc} and currval: ${curl}`)
//     return acc+curl
// },0)

// console.log(mytotal);

// arrow function


const Mynums=[1,2,3,4,5]

const mytotal = Mynums.reduce( (acc,cur) => acc+cur,0)

console.log(mytotal);







