class Lion      //parent class
{
    lionrole() : void
    {
        console.log("Hai I am Lion, King of the Jungle")
    }

    A : string = "King"
}
class Cub  extends Lion //child class   extends to parent class
{
    cubrole() : void
    {
        console.log("Hai I am Cub and I am Prince of the Forest")
    }

    B : string  = "Prince"
}

let K = new Cub();
console.log(K.A)
console.log(K.B)
console.log("------------------------------------------")
let M = new Lion();
console.log(M.A)
console.log(M.B)