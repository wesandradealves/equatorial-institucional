const fs = require("fs");
const path = require("path");

// Caminho para o arquivo package.json
const packageJsonPath = path.join(__dirname, "package.json");

// Ler o conteúdo do arquivo package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

// Incrementar a versão
const versionParts = packageJson.version.split(".");
versionParts[2] = parseInt(versionParts[2], 10) + 1;
packageJson.version = versionParts.join(".");

// Escrever de volta no arquivo package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");

console.log(`Versão atualizada para ${packageJson.version}`);
