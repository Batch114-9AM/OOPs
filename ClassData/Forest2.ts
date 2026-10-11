class Animals
{

    cat() : void
    {
        let K : string = "Kill";   //local variable
        console.log("Hai I am Cat Method in the Animals Class")
    }

    L : string = "Lion";   //instance variable

    zebra() : void
    {
        let K : number = 6;   //local variable
        console.log("Hai I am Zebra Method in the Animals Class")
        console.log("The Kids I Haver are : " +K)
    }

}

let H = new Animals();
console.log(H.L)   //here we are accessing Instance variable using Object Reference.
H.zebra();   //here we are calling method using Object Reference.

