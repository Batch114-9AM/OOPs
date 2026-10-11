class Cow
{
    myColor = "White"
}

class Calf extends Cow
{
    myColor = "Brown"

    dataColor()
    {
        console.log("The Cow Color : " +(new Cow().myColor))
        console.log("The Child Color : " +(new Calf().myColor))
    }
}


let A = new Calf();
A.dataColor();
