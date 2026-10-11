class Cow
{
    Role()
    {
        console.log("The Cow Role is GIVE THE MILK TO THE PEOPLE")
    }
}

class Calf extends Cow
{
    Role()
    {
        console.log("The Calf Role is TAKE REST UNTIL BECOMES COW")
    }

    dataRoles()
    {
        super.Role();  //SUPER keyword calls the data in the parent method
        this.Role();
    }
}

let T = new Calf();
T.dataRoles();

