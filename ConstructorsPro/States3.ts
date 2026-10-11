
class statesInfo
{
    playerName(pid : number , pname : string)
    {
        console.log("The Player ID is : " +pid)
        console.log("The Player Name is : " +pname)
    }

    playerState(pid : number , pstate : string)
    {
        console.log("The Player ID is : " +pid)
        console.log("The Player State is : " +pstate)
    }

    playerGame(pid : number , pgame : string)
    {
        console.log("The Player ID is : " +pid)
        console.log("The Player State is : " +pgame)
    }
    

}
let H = new statesInfo();
H.playerName(10, "Sachin")
H.playerState(10, "Maharastra")
H.playerGame(10, 'Cricket')
