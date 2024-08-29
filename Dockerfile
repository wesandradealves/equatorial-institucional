FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY tsconfig.json .

RUN chown -R node. /app

USER node

CMD npm run dev
