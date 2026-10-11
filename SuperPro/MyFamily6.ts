class Cow
{
    cowRole()
    {
        console.log("The Cow Role is GIVE THE MILK TO THE PEOPLE")
    }
}

class Calf extends Cow
{
    calfRole()
    {
        console.log("The Calf Role is TAKE REST UNTIL BECOMES COW")
    }

    dataRoles()
    {
        this.cowRole();
        this.calfRole();
    }
}

let T = new Calf();
T.dataRoles();

