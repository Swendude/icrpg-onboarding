type MyType = {
  description: string;
  aNum: number;
};

type MyOtherType = {
  description: string;
  aBool: boolean;
};

function trial<T extends { description: string }>(thing: T): string {
  return thing.description;
}

const aMy: MyType = {
  description: "blah",
  aNum: 5
};

const aOther: MyOtherType = {
  description: "bloo",
  aBool: false
};

console.log(trial(aMy));
console.log(trial(aOther));

export {};

function aFunction<A>(first: A, second: number): void {}
