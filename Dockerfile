# TODO: Optimize zero-installs with docker
# @see https://github.com/yarnpkg/berry/discussions/3201

# ====================
# builder stage
# ====================
FROM node:16-alpine as builder
RUN apk add --no-cache libc6-compat
# RUN YARN_VERSION=$(yarn --version) && echo "[builder stage] yarn version: $YARN_VERSION"

# LABEL org.opencontainers.image.authors="dragmove@gmail.com"
LABEL version="0.1.0"
LABEL description="Next.js SSG web aplication - production environment"

# Next.js collects completely anonymous telemetry data about general usage. (@see https://nextjs.org/telemetry)
ENV NEXT_TELEMETRY_DISABLED=1
ENV PROJECT_ROOT=/usr/src/app
# ENV NODE_ENV=production

WORKDIR ${PROJECT_ROOT}

COPY package.json .pnp.cjs yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

RUN corepack enable
RUN yarn set version berry
RUN yarn install --immutable

COPY ./ ./

RUN yarn build

# ====================
# runner stage
# ====================
FROM nginx:1.24.0-alpine-slim

COPY --from=builder /usr/src/app/build /usr/share/nginx/html/

EXPOSE 80
