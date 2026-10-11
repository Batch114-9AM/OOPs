class Laxmaiah
{
    lax() : void
    {
        console.log("Hai I am the Father of SnNTR")
    }
}
class SnNTR extends Laxmaiah
{
    sntr() : void
    {
        console.log("Hai I am Father of HariKrishna")
    }
}
class HariKrishna extends SnNTR
{
    hari() : void
    {
        console.log("Hai I am Father of JnNTR")
    }
}
class JnNTR extends HariKrishna
{
    jntr() : void
    {
        console.log("Hai I am Son of HariKrishna")
    }
}

let R = new JnNTR();
R.sntr();
let Z = new SnNTR();
Z.lax();