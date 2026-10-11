

class Rainbow
{
    Y : string = "Yellow"    //instance variable
    static V : string = "Violet"  //static variable

    static green()   //static area
    {
        console.log("Static Method : Y ---> " +this.Y)
        console.log("Static Method : V ---> " +this.V)
    }

    orange()   //instance area
    {
        console.log("Non-Static Method : Y ---> " +this.Y)
        console.log("Non-Static Method : V ---> " +this.V)
    }
}


let A = new Rainbow();
A.orange()
Rainbow.green();

