import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    res.status(500).json({
      status: "error",
      message: "NEXT_PUBLIC_BASE_URL não está definida",
    });
  }

  try {
    const response = await axios.get(`${baseUrl}`);
    res.status(200).json({
      status: "ok",
      message:
        "Next.js está funcionando corretamente. e Acessando a URL: " + baseUrl,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Erro ao fazer a requisição GET: " + (error as Error).message,
    });
  }
}
