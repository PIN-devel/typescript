function error(message: string): never {
  throw new Error(message);
}
function fail() {
  throw error("fail");
}

function infiniteLoop(): never {
  while (true) {}
}

let a: string = "hello";
if (typeof a !== "string") {
  a; // never (type guard)
}

declare const b: string | number;
if (typeof b !== "number") {
  b; // string (type guard)
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;

type ObjectIndexable = Indexable<{}>;

// const b: Indexable<{}> = "";
