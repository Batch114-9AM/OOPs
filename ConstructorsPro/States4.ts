
class statesInfo
{
    pid;
    constructor(id : number)   //id --> 10
    {
        this.pid = id   //now pid value is 10
    }
    playerName(pname : string)
    {
        console.log("The Player ID is : " +this.pid)
        console.log("The Player Name is : " +pname)
    }

    playerState(pstate : string)
    {
        console.log("The Player ID is : " +this.pid)
        console.log("The Player State is : " +pstate)
    }

    playerGame(pgame : string)
    {
        console.log("The Player ID is : " +this.pid)
        console.log("The Player State is : " +pgame)
    }
    

}
let H = new statesInfo(10);
H.playerName("Sachin")
H.playerState("Maharastra")
H.playerGame('Cricket')
