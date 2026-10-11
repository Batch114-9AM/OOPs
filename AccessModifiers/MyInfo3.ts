

class balance 
{   
    protected amount : number = 789123;  //pure private

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
            console.log( "In Other Class, The Current Balance is " +this.amount)
    }
}

let T = new myCarLoan();
T.carLoan()

let K = new myFriend();
K.friendInfo();