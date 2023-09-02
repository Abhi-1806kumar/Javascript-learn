// for of 

// ["","",""] // string in array
// [{},{},{}]// object in array



const arr =[1,2,3,4,5]

for (const num of arr) {
    console.log(num)
    
}


const greeting ="Hello world!"
for (const greet of greeting) {
    console.log(`each char at ${greet}`)
    
}





const map = new Map()
map.set("IN","india")
map.set("USA","united states of america")
map.set("Fr","France")

console.log(map)

for (const [key,value] of map) {

    console.log(key,':-',value)
    
}

const myObject ={
    js : 'javascript',
    cpp : 'c++',
    rb : "rubby",
    swift: "swift by apple"
}

// for in required for itreator over the loop

for (const key in myObject) {
    console.log(key)
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`)

}

// for in for arrays

const programming =["js","rb","py"]

for (const key in programming) {
    console.log(programming[key]);
   
}

// while using call back function dont use function name
const coding = ["js","ruby","java"]

// coding.forEach( function (val){
//        console.log(item);

// })

// using arrow function

// coding.forEach( (item) => {
//     console.log(item);
// })


// object in the array

const mycodeing =[
    {
        name:"abhi",
        user: "vlogs"
    },
    {
        name:"average",
        user:"life"
    },
    {
        name:"old",
        user:"school"
    },

]

mycodeing.forEach( (item) =>{
    console.log(item.name)
} )

