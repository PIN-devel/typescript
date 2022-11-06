declare const maybe: unknown;

// const aNumber:number = maybe;

if (maybe === true) {
  // type guard
  const aBoolean: boolean = maybe;
  // const aString: string = maybe;
  maybe;
}

if (typeof maybe === "string") {
  // type guard
  const aString: string = maybe;
  // const aBoolean: boolean = maybe;
}
