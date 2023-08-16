var foo: string = 'camila'
let bar: string = 'camila'
const baz: string = 'jose'

const func = () => {
  bar = 'greg'
  console.log(bar) // greg

  // baz = 'maria' // error
  console.log(baz) // error
}

foo = 'greg'

const string: string = 'camila' || "camila" || `${bar} dias`
const number: number = 1 // int, float, double
const boolean = true || false
const array = [1, 2, 3] || new Array() || [] || new Array(6) //lista 
const object = { name: 'camila', age: 25 } || new Object() || {} //dicionario

const camilaDias = 'meu nome é camila dias figueiredo'

function soma(a: number, b: number): number {
  return a + b 
}

const dif = (a, b) => a - b

const sum = (a, b) => {
  console.log(a + b)
  
  return a + b 
} // arrow function



type tipos = string | number | boolean | Array<boolean> | boolean[] | Record<string, any> 

type name = string | number


const objeto: Record<string, string | number> = {
  key: 'camila',
  key2: 'camila',
  key3: 1,
}

const a = objeto.key // camila


interface tipo {
  name: name,
  age?: number
}


const obj: tipo = {
  name: 'camila',
  age: 25

}



