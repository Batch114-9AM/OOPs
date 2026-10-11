class Lion
{
    lionrole() : void
    {
        console.log("Hai I am Lion, King of the Jungle")
    }
}
class Cub
{
    cubrole() : void
    {
        console.log("Hai I am Cub and I am Prince of the Forest")
    }
	dataaroles() : void
	{
		let A = new Lion();
		A.lionrole();	
	}
}

let K = new Cub();
K.cubrole();
K.dataaroles();