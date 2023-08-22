// singleton 
// Object.crerat

// object literals

const mysym = Symbol("key1")

const Jsuser ={
    name:"abhi",
    age:18,
    [mysym]: "mykey1",
    location: "IND",
    email:"abhi@abhi.vlogs",
}

console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser[mysym])


Jsuser.email = "abhi@chatgpt.com"
//Object.freeze(Jsuser)
Jsuser.email="abhi@microsoft.com"
console.log(Jsuser["email"])

Jsuser.greeting = function(){
    console.log("Helllo guys welcome to my vlogs")
}

//console.log(Jsuser.greeting());

Jsuser.greetingTwo=function(){
    console.log(`hello js user , ${this.name}`)
}

