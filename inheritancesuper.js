class student{
    constructor(name){
        this.name=name;
    }
    display(){
        console.log("student name in parent class is "+this.name);
    }
}
class student1 extends student{
    constructor(name,rollno){
        super(name);
        this.rollno=rollno;
    }
    display1(){
        super.display();
        console.log("student name in child class is "+this.name+" student rollno is "+this.rollno);
    }
}
let s=new student1("sreeja",1228);
//s.display();
s.display1();