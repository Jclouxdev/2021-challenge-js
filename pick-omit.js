//<!>Those functions are pure and must not modify the given object<!>

//Create a pick function that takes an object and keys. 
//This function create a new object that pick only the keys, in the second argument, 
//from the object passed as argument.
const pick = (obj, keys) => {
  return keys.reduce((acc, k) => {
    if (obj.hasOwnProperty(k)) {
      return { ...acc, [k]: obj[k] };
    }
    return acc;
  }, {});
};

//Create a omit function that takes an object and keys. 
//This function create a new object that omit only the keys, in the second argument, 
//from the object passed as argument.
const omit = (obj, keys) => {
  const alteredObj = obj;
  keys.map((k) => delete alteredObj[k]);
  return alteredObj;
};


//TEST
const setupTest = {
  agent: {
    firstName: 'James',
    lastName: 'Bond',
    age: 25,
    email: 'jamesbond@hotmail.com',
  },
  newAgent: { firstName: 'James', lastName: 'Bond' },
  car: { brand: 'ford', motor: 'v8', year: 2000 },
  newCar: { brand: 'ford', year: 2000 },
  user: { firstName: 'John', lastName: 'Doe', age: 32, ageVerified: false },
  newUser: { ageVerified: false },
  computer: { brand: 'lenovo', ram: '32GB', processor: 'i7 8th Gen' },
  tools: { drill: 'bosh', grinders: 'DeWalt', saws: ' Makita' },
  newtool: { drill: 'bosh' },
  games: { board: 'monopoly', cards: 'poker', dice: 'roulette' },
  newgames: { dice: 'roulette' },
  language: { England: 'english', Spain: 'spanish', Portugal: 'portuguese' },
  newlanguage: { England: 'english', Portugal: 'portuguese' },
  phone: { samsung: 'galaxy', asus: 'zenphone', nokia: 'lumia' },
}
console.log(pick(setupTest.agent, ['firstName', 'lastName']))
console.log('->', setupTest.newAgent)

console.log((omit(setupTest.tools, ['grinders', 'saws'])))
console.log('->', setupTest.newtool)