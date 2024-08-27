FROM node:20.15.0-alpine

WORKDIR /app

COPY package.json ./

COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY tsconfig.json .

RUN npm install --legacy-peer-deps;

RUN chown -R node:node /app

USER node

RUN npm run build

CMD ["npm", "run", "start"]
