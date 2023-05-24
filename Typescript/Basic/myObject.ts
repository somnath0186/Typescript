const User = {
  name: "somnath",
  email: "somnath@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}
let newUser={name:"somnath",isPaid:false,email:"somnath@gmail.com"}
createUser(newUser);

function createCourse(): { name:string; price: number } {
  return { name: "somnath", price: 399 };
}

// export {};
