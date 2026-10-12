class Forest
{
        Animals() : void
        {
            console.log("Hai I am Animals Method without any Parameters")
        }
        Animals(a : number) : void
        {
            console.log("Hai I am Animals Method with ONE NUMBER Parameters")
        }
        Animals(a : number, b : string) : void
        {
            console.log("Hai I am Animals Method with TWO NUMBER - STRING Parameters")
        }
        Animals(x : string, y : number) : void
        {
            console.log("Hai I am Animals Method with TWO STRING - NUMBER Parameters")
        }
}

let K = new Forest();
K.Animals(1234);
