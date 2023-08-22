// const tinderUser = new Object()
const tinderUser ={}

tinderUser.id="321abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


const obj1={1: "a",2: "b"}
const obj2={3: "a",4: "b"}

// const obj3 ={obj1,obj2}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);


// array ka object

const user =[
    {
        id:1,
        email: "h@gmail.com"

    },
]

// important

//user[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser)) 

// basically the above method converts the object in the array format 

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));





