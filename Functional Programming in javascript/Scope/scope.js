var a = 5 // we can access this a anywhere

function adder(){
    let b = 7;
    console.log(a+b)
}

console.log(adder())

console.log(b) 
{
    const c = 10
    console.log(c) //10
}

console.log(c) // error as c not accesssible outside block