

class balance 
{   
    amount : number = 789123;  //pure private

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
            let R = new balance();
            console.log( "In Other Class, The Current Balance is " +R.amount)
    }
}

let T = new myCarLoan();
T.carLoan()

let K = new myFriend();
K.friendInfo();