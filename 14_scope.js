

let a = 100;


if(true){
    let a = 10
    const b = 20
    //var c = 30
    console.log(a);
}

//console.log(a);
//console.log(b);
console.log(a);


//nested scoping

function one(){
    const name ="Abhi"
    function two(){
        const website ="youtube"
        console.log(website);
    }
    // console.log(website);
    two()
}

one()


// one more concepts fuction

function addone(num){
    return num +1
}

addone(5)

const addtwo = function(num){
    return num+2
}

console.log(addtwo(5))