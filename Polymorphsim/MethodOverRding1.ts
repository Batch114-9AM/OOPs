class Forest
{
        Animals() : void
        {
            console.log("Hai I am Animals Method without any Parameters - Part1")
        }
        
}

class Living extends Forest
{
        Animals() : void
        {
            super.Animals();
            console.log("Hai I am Animals Method without any Parameters - Part2")
        }
       
}

let K = new Living();
K.Animals();
