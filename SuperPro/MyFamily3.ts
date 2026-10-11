class Cow
{
    myColor = "White"
}

class Calf extends Cow
{
    myColor = "Brown"

    dataColor()
    {
        console.log("The Cow Color is : " +super.myColor)   //super deals with parent class data only
       //Note: Javascript doesn't have a super keyword to handle parent variable like in JAVA
        console.log("The Calf Color is : " +this.myColor) //this deals with current class data only
    }
}


let A = new Calf();
A.dataColor();
