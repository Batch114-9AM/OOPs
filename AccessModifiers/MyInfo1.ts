

class balance 
{   
    private amount : number = 789123;

    mybal() : void
    {
        console.log("The Current Balance is " +this.amount)
    }
}

class myCarLoan extends balance
{
    carLoan()
    {
        console.log( "In Child Class, The Current Balance is " +this.amount)
    }
    
}

class myFriend
{
    friendInfo()
    {
            let Y = new balance();
            console.log( "In Other Class, The Current Balance is " +Y.amount)
    }
}

let T = new myCarLoan();
T.carLoan()

let K = new myFriend();
K.friendInfo();