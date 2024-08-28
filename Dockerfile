FROM node:20.15.0-alpine

WORKDIR /app

# Definindo variáveis de ambiente
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
ENV NEXT_PUBLIC_HOME_URL=${NEXT_PUBLIC_HOME_URL}
ENV NEXT_PUBLIC_YOUTUBE_API_KEY=${NEXT_PUBLIC_YOUTUBE_API_KEY}
ENV NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=${NEXT_PUBLIC_YOUTUBE_CHANNEL_ID}

COPY package.json ./

COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY tsconfig.json .

RUN npm install --legacy-peer-deps

RUN chown -R node:node /app

USER node

RUN npm run build

CMD ["npm", "run", "start"]