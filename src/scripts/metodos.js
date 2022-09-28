

// Método Map ---------

const arrayMap = [1, 2, 3, 4, 5]; 

// função callback
// Ela apenas imprime o elemento na posição do index e de que array ele veio
function callbackMap(element, index, array) {
  return `Número ${element} no index: ${index}, veio desse array: ${array}`;
}

function map(array, callback) {
  const novoArray = []
  for(let i = 0; i < array.length; i++){
    let numero = callback(array[i], i, array)
    novoArray.push(numero)
  }
  return novoArray
}

console.log(map(arrayMap, callbackMap));

// //Método Filter ---------

const arrayFilter = [1, 2, 3, 4, 5]; 

// função callback
// Ela apenas imprime o elemento que for maior que 2
function callbackFilter(element, index, array) {
  if (element > 2 && index && array.length > 2) {
    return true;
  }
}

function filter(array, callback) {
  const novoArray = []
  for(let i = 0; i < array.length; i++){
    let numero = callback(array[i], i, array)
    if(numero === true){
      novoArray.push(array[i])
    }
  }
  return novoArray
}

console.log(filter(arrayFilter, callbackFilter));

// //Método Reduce ---------

const arrayReduce = [1, 2, 3, 4, 5]; 

// função callback
// Ela apenas soma os valores, como um acumulador mesmo
function callbackReduce(acumulator, valorAtual) {
  return acumulator + valorAtual;
}

function reduce(array, callback, initialValue = 0) {
  let resultado = initialValue
  for(let i = 0; i < array.length; i++){
    resultado = callback(resultado, array[i])
  }
  return resultado
}

console.log(reduce(arrayReduce, callbackReduce));
console.log(reduce(arrayReduce, callbackReduce, 50));


// //Método Find ---------

const arrayFind = [1, 2, 3, 4, 5];

// função callback
// Ela imprime o primeiro elemento maior 1 e menor 4, caso contrário retorna undefined
function callbackFind(element, index, array) {
  if (element > 1 && element < 4 ) {
    return true;
  }
}

function find(array, callback) {
  for(let i = 0; i < array.length; i++){
    let numero = callback(array[i], i, array)
    if(numero === true){
      return array[i]
    }
  }
  return undefined

}

console.log(find(arrayFind, callbackFind));



// //Método Includes ---------

const arrayIncludes = [1, 2, 3, 4, 5];

// Ela retorna true caso haja o elemento no array, caso contrário retorna false

function includes(elemento, inicio) {
  for(let i = inicio; i < arrayIncludes.length; i++){
    if(elemento === arrayIncludes[i]){
      return true
    }
  }
  return false
}
console.log(includes(5,0))


// //Método IndexOf---------

const arrayIndexOf = [1, 2, 3, 4, 5];

// Ela retorna retorna o index do elemento passado, caso contrário retorna -1

function indexOf(elemento, inicio) {
  for(let i = inicio; i < arrayIndexOf.length; i++){
    if(elemento === arrayIndexOf[i]){
      return [i]
    }
  }
  return -1
}
console.log(indexOf(2,0))