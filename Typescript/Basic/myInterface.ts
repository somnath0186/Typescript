//Interface for
interface User5{
   readonly id:number
    name:string;
    email:string;
    age?:number;
    getCoupon(coupanname:string):number;
   startTail?():string;

}

interface User6 extends User5{
    socialMedia:"Instagram"|"Facebook"|"Twitter"

}
const sham1:User6={id:10,name:'somnath',email:'somnath@gmail.com',
getCoupon:(coupanname:'movie')=>{return 10},

startTail:()=>{return 'hello'},

socialMedia:"Instagram"


}



