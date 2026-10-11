class Cow
{
    myColor = "White"
    constructor()
    {
        console.log("In Parent Construtor : " +this.myColor)
    }
}

class Calf extends Cow
{
    myColor = "Brown"

    construtor()
    {
        //super();  --> without super keyword, default parent construcctor will be called
       
    }

    dataColor()
    {
         console.log("In Child Constructor : " +this.myColor)
    }
  
}

let C = new Calf();
C.dataColor();

