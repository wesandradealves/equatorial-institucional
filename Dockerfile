FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./

# RUN npm install --legacy-peer-deps
COPY node_modules ./node_modules

COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY tsconfig.json .

RUN chown -R node. /app

RUN npm run build

COPY entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

USER node

CMD npm run start
