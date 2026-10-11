class Cow
{
    myColor = "White"
}

class Calf extends Cow
{
    myColor = "Brown"

    dataColor()
    {
        console.log("The Cow Color is : " +this.myColor)   //this deals with current class data only
        console.log("The Calf Color is : " +this.myColor) //this deals with current class data only
    }
}


let A = new Calf();
A.dataColor();
