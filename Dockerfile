FROM node:alpine3.18 as base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN apk update && apk add --no-cache libc6-compat && \
  corepack enable && corepack prepare pnpm@latest --activate 

WORKDIR /app
COPY package.json pnpm-lock.yaml /app/

# ----------------------------------
FROM base as build

RUN pnpm install --frozen-lockfile --ignore-scripts
COPY . /app/
RUN pnpm run build

# ----------------------------------
FROM base as prod
RUN pnpm install --prod --frozen-lockfile --ignore-scripts
COPY --from=build /app/dist /app/dist

CMD ["node", "dist/main.js"]