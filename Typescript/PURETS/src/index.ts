class User {
     name: string;
     age: number;
   readonly city: string="pune";
    constructor(name:string, age:number) {
            this.name = name;
            this.age = age;
            // this.city=city;
        }
}

// const user=new User('somnath',23);
// console.log(user);