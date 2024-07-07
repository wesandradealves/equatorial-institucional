import { NextResponse } from "next/server";

export function middleware(request) {
  const response = NextResponse.next();

  // Defina sua política CSP aqui. Este é apenas um exemplo básico.
  const csp = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' example.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data:;
    font-src 'self';
  `
    .trim()
    .replace(/\s+/g, " ");

  response.headers.set("Content-Security-Policy", csp);

  return response;
}
