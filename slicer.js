/*
Create the slice function that works like Array.slice and String.slice

It takes an additional first argument which is the string or the array
*/

const slice = (arr ,cut) => {
  for(let i = 0; i < cut; i++) {
    delete arr[i]
  }
  return arr
}

console.log(slice([1,2,3,4,5,6], 4))