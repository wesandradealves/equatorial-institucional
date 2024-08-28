import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Verificar o status da aplicação (aqui estamos simplificando)
    // Você pode adicionar verificações adicionais conforme necessário

    // Responder com HTTP 200 se tudo estiver OK
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
