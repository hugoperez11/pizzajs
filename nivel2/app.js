import promptSync from 'prompt-sync';
import { deliverPizza } from '../nivel2/pizzaData.js';

function app() {
  const prompt = promptSync();
  const pizzaName = prompt("And your pizza is ... pepperoni: ");

  if (pizzaName !== "pepperoni") {
    console.log(`Lo siento, solo tenemos pizza de pepperoni disponible.`);
    return;
  }

  console.log(`Pizza solicitada: ${pizzaName}`);

  deliverPizza();
}

app();

