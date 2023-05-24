     type User1={
      readonly  _id: string,
        name: string,
        email: string,
        isActive: boolean,
        credCardDetails?:number
     }                                          

     let myUser: User1 ={
        _id: "123",
        name: "John Doe",
        email: "envkt@example.com",
        isActive: true,
        // credCardDetails: 1234567890
        
        
     }
   //   console.log(myUser._id="123")

     myUser.email = 'upchh@example';
    //  myUser._id = '1234';