interface interface3
{
    m3() : void
}

interface interface2
{
    m2() : void
}

interface interface1 
{
    m1() : void;
}

class ConcreteClass implements interface1, interface2, interface3
{
        m1(): void
        {
            console.log("Hai I am M1 Method from Interface1 implemented in Concrete Class")
        }
        m2(): void
        {
            console.log("Hai I am M2 Method from Interface2 implemented in Concrete Class")
        }
        m3(): void
        {
            console.log("Hai I am M3 Method from Interface3 implemented in Concrete Class")
        }
}

let H = new ConcreteClass();
H.m1();
H.m2();
H.m3();