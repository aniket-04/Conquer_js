// Flatten Array

const input = [1, 2, 3, [4, 5, 6, [7, 8, [9, 10]]]]

function ab(inputArr) {
  let result = []

  for (let i = 0; i < inputArr.length; i++) {
    if (Array.isArray(inputArr[i])) {
     // result = result.concat(ab(inputArr[i]))      
     result.push(...ab(inputArr[i]))
    } else {
      result.push(inputArr[i])
    }
  }

  return result
}

console.log(ab(input))
