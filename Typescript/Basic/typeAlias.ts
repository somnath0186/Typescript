type User3= {
  name: string;
  email:string;
  isActive: boolean;
};

function createUser(user: User3): User3 {
    return {name: "", email:"", isActive: false};
}

createUser({name: "somnath", email: "soskdms", isActive:true})
