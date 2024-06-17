const levadura = '30 gramos de levadura fresca';
const agua = '2½ tazas de agua tibia';
const aceite = '2 cucharadas soperas de aceite de oliva';
const harina = 'Harina de fuerza';
const sal = '1 cucharadita de sal fina';
const reposoTiempo = '45 min';
let masa = 'Para hacer la masa mezclar:'
function hacerMasa() {
    console.log(`${masa} ${levadura}, ${agua}, ${aceite}, ${harina}, ${sal}, reposo durante ${reposoTiempo}`); 
}
hacerMasa();

let hacerForma = 'Darle forma a la masa para 4 pizzas 4 porciones obtenidas'
function forma() {
    console.log(`${hacerForma}`) 
}
forma() 

let ingredientes = 'Añadir Salsa de tomate, Mozzarela, Pepperoni, 4 aceitunas negras'
function añadirIngredientes(params) {
    console.log(`${ingredientes}`)    
}
añadirIngredientes()

let pizzaLista = 'Hornear la pizza durante 10 min. Pizza Lista. Pizza entregada'
function todoHecho() {
    console.log(`${pizzaLista}`)    
}
todoHecho()