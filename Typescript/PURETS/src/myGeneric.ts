const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

const ans = function identityTwo(val: any): any {
  return "somnath";
};
// console.log(ans);

function identityThree<Type>(val: Type): Type {
  return val;
}

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  Brand: string;
  Type: number;
}

// identityFour<Bottle>({})

function getSearchProducts<T>(products: T[]): T {
  //do some database operations
  return products[3];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  const myIndex = 4;

  return products[myIndex];
};

interface DataBase {
  connection: string;
  username: string;
  password: string;
}

function anotheFunction<T, U extends DataBase>(valOne: T, valTwo: U): object {
  return {
    valOne: valOne,
    valTwo: valTwo,
  };
}
anotheFunction("soma", {
  connection: "SOMA#$%",
  username: "SOMNA",
  password: "ASDF",
});

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCourt(product: T) {
    this.cart.push(product);
  }
}

const sellable = new Sellable();
sellable.addToCourt('Java')