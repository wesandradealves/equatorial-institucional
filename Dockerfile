FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
\
  else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
  fi

COPY src ./src
COPY public ./public
COPY next.config.mjs .
COPY tsconfig.json .
USER node

CMD \
  if [ -f package-lock.json ]; then npm run dev; \
  else npm run dev; \
  fi