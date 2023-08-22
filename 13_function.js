function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");

}
sayMyName()

function addtwonumber(number1,number2){
    console.log(number1+number2);

}

addtwonumber(3,"4")


// ways to decalre the 

function addTwo(number1,number2){
    // let result = number1+number2
    //return result
    return number1+number2
}

const result = addTwo(6,6)
console.log(result);

function loginUsermessage(username){
    return `${username} just logged in`
}

console.log(loginUsermessage("hitesh"))

// rest and spreed basically cart example and coverts it into array

function calculateCartPrice(... num1){
    return num1
}

console.log(calculateCartPrice(200,400,500))

// Function with object

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price  ${anyobject.price}`)
}

handleObject(user)
handleObject({
    username:"anhi",
    price:900
})


// Function with Array

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,500,1000]))

