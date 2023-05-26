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
var User = /** @class */ (function () {
    function User(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this._courseCount = 10;
    }
    Object.defineProperty(User.prototype, "getCourseCount", {
        get: function () {
            return this._courseCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setCourseCount", {
        set: function (value) {
            if (value < 1) {
                throw new Error("Course count cannot be less than 1");
            }
            else {
                this._courseCount = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var hanuman = new User('somnath', 23, 'somn');
hanuman.setCourseCount = 555;
var value = hanuman.getCourseCount;
console.log(value);
