// const user={
//     username:"abhi",
//     price:999,
    
//     welcomemessage : function(){
//         console.log(`${this.username}, welcome to my website`)
//     }
// }

// user.welcomemessage()
// user.username="vlogs"
// user.welcomemessage()

// console.log(this)

// this inside function

// function chai(){
//     let username = "abhii"
//     console.log(this.username)

// }
//     chai()

// Arrow function

// const chai = () => {
//     let username = "vlogss"
//     console.log(this);
// }

// chai()


// const addtwo = (num1,num2) =>{
//     return num1+num2
// }

// const addTwo = (num1, num2)=> num1+num2
// const AddTwo = (num1, num2)=> (num1+num2)

// const addTWO = (num1,num2) => ({username:"vlog"})

// console.log(addtwo(3,4))
// console.log(addTwo(3,4))
// console.log(AddTwo(5,6))
// console.log(addTWO(6,7))

// Immediately Invoked Function Expression

(function chai() {
    console.log(`DB Connected`)
})();

((name)=>{
    console.log(`DB Connected ${name}`);
})("abhii");

