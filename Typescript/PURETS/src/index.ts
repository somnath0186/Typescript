// class User {
//      name: string;
//      age: number;
//    readonly city: string="pune";
//     constructor(name:string, age:number) {
//             this.name = name;
//             this.age = age;
//             // this.city=city;
//         }
// }

class User {
  private _courseCount: number = 10;

  constructor(public name: string, public age: number, public email: string) {}
  private deleteToken(){
    return "tokenmm is deleted"
  }
  get getCourseCount(): number {
    return this._courseCount;
  }
  set setCourseCount(value: number) {
    if (value < 1) {
      throw new Error("Course count cannot be less than 1");
    } else {
      this._courseCount = value;
    }
  }
}
let hanuman = new User('somnath',23,'somn');
hanuman.setCourseCount=555
let value=hanuman.getCourseCount;

console.log(value);
