// const default = 30
const getDefault = c => c * 2

function compute(a = 10, b = getDefault(a)) {   // по умолчание
  return a + b
}

console.log(compute())
