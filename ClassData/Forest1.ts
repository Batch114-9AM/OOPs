class Animals
{

    cat() : void
    {
        console.log("Hai I am Cat Method in the Animals Class")
    }

    L : string = "Lion";   //instance variable

    zebra() : void
    {
        console.log("Hai I am Zebra Method in the Animals Class")
    }

}

let H = new Animals();
console.log(H.L)   //here we are accessing Instance variable using Object Reference.
H.zebra();   //here we are calling method using Object Reference.

