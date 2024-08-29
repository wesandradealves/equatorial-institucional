import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Adicionar cabeçalhos CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  try {
    res.status(200).json({
      status: "ok",
      message: "Next.js está funcionando corretamente.",
    });
  } catch (error) {
    // Em caso de erro, responder com HTTP 500
    res.status(500).json({
      status: "error",
      message: "Erro: " + (error as Error).message,
    });
  }
}
