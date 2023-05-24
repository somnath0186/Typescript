let score: number|string=33
score='33'
score=12

type User={
    name:string,
    id:number
}

type Admin={
    userName:string;
    id:number;
}

let somnath: User|Admin={name:'somnath',id:33};

somnath={userName:'jaagale',id:33};

//function

function getDataById(id:number|string){
    if(typeof id === 'string'){
       return id.toUpperCase();

    }


}
getDataById(33)
getDataById('33')

//Array
let Hero:(string|number)[] =["soma",'batman',10,20]