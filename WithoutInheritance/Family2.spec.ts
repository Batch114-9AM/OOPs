class Lion      //parent class
{
    lionrole() : void
    {
        console.log("Hai I am Lion, King of the Jungle")
    }
}
class Cub  extends Lion //child class   extends to parent class
{
    cubrole() : void
    {
        console.log("Hai I am Cub and I am Prince of the Forest")
    }
}

let K = new Cub();
K.cubrole();
K.lionrole();