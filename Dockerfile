FROM node:20-alpine

WORKDIR /app

RUN npm install -g npm@10.8.3

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY tsconfig.json .

# RUN npm run build

RUN chown -R node: /app

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh

USER node

ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

CMD [ "npm", "run", "dev" ]
