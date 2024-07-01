const performance = require('performance-now');

// Exemple de fonction à tester pour sa performance
function performTask() {
  // À remplacer par le code que vous souhaitez tester
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += i;
  }
  return result;
}

// Mesurer le temps d'exécution de la fonction
const start = performance();
const result = performTask();
const end = performance();
const duration = (end - start).toFixed(3);

console.log(`Task performed in ${duration} milliseconds.`);
console.log(`Result: ${result}`);
