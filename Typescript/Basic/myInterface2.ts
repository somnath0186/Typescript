interface Car1{
    readonly carName: string;
    color: string;
    price: number;
    carModel:number
    carSpeed(speed:number):number;

}

interface Car2 extends Car1{
    extraFeatures:"EV"|"Hybrid" |"Hydrogen"|"Solar"
}


const buyer1:Car2={carName:"Nexon",color:"black",price:2500000,carModel:2022,
 carSpeed(speed:180):number {
     return speed
 },
 extraFeatures:"Solar"
}

console.log(buyer.carSpeed(150));