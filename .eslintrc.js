module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
    },
    "extends": "eslint:recommended",
    "overrides": [],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"], // Exige des point-virgules à la fin des instructions
        "quotes": ["error", "double"], // Exige l'utilisation de guillemets doubles pour les chaînes de caractères
    }
};
