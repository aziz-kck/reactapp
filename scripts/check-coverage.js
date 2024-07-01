// check-coverage.js

const fs = require('fs');

// Chemin vers le fichier de rapport de couverture généré par Jest
const coveragePath = './coverage/coverage-summary.json';

// Lire le fichier de rapport de couverture
const coverageData = JSON.parse(fs.readFileSync(coveragePath, 'utf8'));

// Seuils de couverture pour chaque type
const thresholds = {
    statements: 80,
    branches: 80,
    functions: 80,
    lines: 80,
};

// Vérifier la couverture par rapport aux seuils définis
Object.entries(thresholds).forEach(([type, threshold]) => {
    const coverage = coverageData.total[type].pct;
    console.log(`${type}: ${coverage}%`);
    if (coverage < threshold) {
        console.error(`Coverage below threshold of ${threshold}%`);
        process.exit(1); // Quitte le processus avec un code d'erreur
    }
});
