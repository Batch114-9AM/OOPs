
abstract class myCartoBuy      //discussion with my friend at 6AM
{
    abstract color() : void;
    abstract model() : void;
    abstract fuel() : void;
    tyres() : void
    {
        console.log("Hai I Car Has FOUR tyres");
    }
}

class myCarData   extends myCartoBuy             //discussion with my friend on 6PM
{
    color() : void
    {
        console.log("My Car color is RED and BLACK")
    }

    model() : void
    {
        console.log("My Car Model is Top End")
    }

    fuel() : void
    {
        console.log("My Car Fuel is PETROL")
    }
}

let C = new myCarData();

C.tyres();
C.fuel();
C.model();
C.color();
