var foo = 'camila'
let bar = 'camila'
const baz = 'jose'

const func = () => {
  bar = 'greg'
  console.log(bar) // greg

  baz = 'maria'
  console.log(baz) // error
}

foo = 'greg'

const string = 'camila' || "camila" || `${bar} dias`
const number = 1 // int, float, double
const boolean = true || false
const array = [1, 2, 3] || new Array() || [] || new Array(6) //lista 
const object = { name: 'camila', age: 25 } || new Object() || {} //dicionario

const camilaDias = 'meu nome é camila dias figueiredo'

function sum(a, b) {
  return a + b
}

const dif = (a, b) => a - b

const sum = (a, b) => {
  console.log(a + b)
  
  return a + b 
} // arrow function


// const operadoresLogicos = &&, ||, ==, ===, !=, !==, >, <, >=, <=

const n1 = 1
const n2 = '1'

console.log(n1 === n2) // false










