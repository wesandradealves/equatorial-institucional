FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY tsconfig.json .

RUN chown -R node. /app
COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN run build
# Dar permissão de execução ao script de inicialização
RUN chmod +x /usr/local/bin/entrypoint.sh

# Definir o script de inicialização como o ponto de entrada
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
USER node

CMD npm run start
