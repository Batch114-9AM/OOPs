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
        this.Role();
        this.Role();
    }
}

let T = new Calf();
T.dataRoles();

