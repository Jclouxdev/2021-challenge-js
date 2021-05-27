/*The objective of this exercise is to merge objects into a new object depending on the values type
With this create a function called fusion that:
If the type is an array you must concat it
fusion([1, 2], [3, 4]) // -> [1,2,3,4]

If it is a string you must concatenate with a space
fusion('Salem', 'alem') // -> 'Salem alem'

If it is numbers you must added them
fusion(4, 11) // -> 15

In case of type mismatch you must replace it with the value of the second object
fusion({ a: 'hello', b: [] }, { a: 4 })
// -> { a: 4, b: [] }

If it is an object you must fusion them recursively
fusion({ a: 1, b: { c: 'Salem' } }, { a: 10, x: [], b: { c: 'alem' } })
// -> { a: 11, x: [], b: { c: 'Salem alem' } }*/
const fusion = (el1, el2) => {
  console.log({ anotherTest: "here", el1: typeof el1, el2: typeof el2 });
  // type mismatch, replace value in first by second value
  // only if second value defined
  if (typeof el1 !== typeof el2) {
    return el2 ?? el1;
  }

  // it's an objet, call fusion recursively to fusion properties
  if (typeof el1 === "object" && !Array.isArray(el1)) {
    Object.entries(el2).map(([key]) => {
      if (!el1.hasOwnProperty(key)) {
        el1[key] = undefined;
      }
    });

    let el1Buffer = {};
    for (const [key] of Object.entries(el1)) {
      if (Object.prototype.toString.call(el2[key]) === "[object Object]") {
        el1Buffer[key] = fusion(el1[key], el2[key]);
      } else {
        el1Buffer = { ...el1Buffer, ...{ [key]: el2[key] } };
      }
    }
    return el1Buffer;
  }

  if (Array.isArray(el1)) {
    return [...el1, ...el2];
  }

  if (typeof el1 === "string") {
    return `${el1} ${el2}`;
  }

  if (typeof el1 === "number") {
    return el1 + el2;
  }
};

//TEST
console.log(fusion({ arr: [1, '2'] }, { arr: [2] }),'->', [1, '2', 2])
console.log(fusion('Ceci est', 'un test'),'->', 'Ceci est un test')
console.log(fusion(25, 19),'->', 44)
console.log(
  fusion(Object.freeze({ a: { b: 1 } }), Object.freeze({ a: { b: 2 } }))
);