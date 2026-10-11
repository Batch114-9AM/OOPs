

class ATMInfo
{
    #userpin : number;
    #username : string;
    #useramount : number;

    constructor(upin : number, uname : string, uamount : number)  //1212, 'Ravi', 10200
    {
        this.#userpin = upin;
        this.#username = uname;
        this.#useramount = uamount;
    }

    setuserpin(upin : number)
    {
         this.#userpin = upin;
    }

    getuserpin() : number
    {
         return this.#userpin
    }
}

let ATMUser = new ATMInfo(8912, 'Srujan', 14500)
ATMUser.setuserpin(8912);
console.log(ATMUser.getuserpin());