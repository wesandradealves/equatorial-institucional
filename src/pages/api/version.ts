import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Construir o caminho para o arquivo package.json
    const packageJsonPath = path.resolve(process.cwd(), "package.json");

    // Ler o conteúdo do arquivo package.json
    const packageJsonContent = fs.readFileSync(packageJsonPath, "utf-8");

    // Parsear o conteúdo do arquivo package.json
    const packageJson = JSON.parse(packageJsonContent);

    // Obter a versão do package.json
    const version = packageJson.version;

    // Responder com HTTP 200 e a versão
    res.status(200).json({
      status: "ok",
      version: version,
      message: "Versão do projeto obtida com sucesso.",
    });
  } catch (error) {
    // Em caso de erro, responder com HTTP 500
    res.status(500).json({
      status: "error",
      message: "Erro: " + (error as Error).message,
    });
  }
}
