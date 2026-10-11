class Cow
{
    myCowColor = "White"
}

class Calf extends Cow
{
    myCalfColor = "Brown"

    dataColor()
    {
        console.log("The Cow Color is : " +this.myCowColor)
        console.log("The Calf Color is : " +this.myCalfColor)
    }
}


let A = new Calf();
A.dataColor();
