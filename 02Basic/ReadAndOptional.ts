     type User1={
        id: string,
        name: string,
        email: string,
        isActive: boolean,
        credCardDetails?:number
     }                                          

     let myUser: User1 ={
        id: "123",
        name: "John Doe",
        email: "envkt@example.com",
        isActive: true,
        // credCardDetails: 1234567890
        
        
     }

     myUser.email = 'upchh@example';
    //  myUser._id = '1234';

    type cardNumber={
        cardNumber:string
    }
    type cardDate={
            cardDate:string
        }
        
        type credCardDetails=cardNumber & cardDate &{
            cvv:number
        }