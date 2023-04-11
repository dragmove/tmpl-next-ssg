# Nop

This is a [Nop](https://google.com) project. // Next.js, Styled-components, Yarn-berry, Docker, Docker-compose, etc.

## Run with Next.js development server

```bash
# Run development server:
yarn dev

# Inspect
yarn run --inspect dev
```

Access [http://localhost:3000](http://localhost:3000) with browser.

<!--
[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
-->

## Run with Docker

### Run containers with Docker-compose

Run development/production server:

```bash
# Run development (with Next.js server)
docker compose -f docker-compose-dev.yml up --build
# Access [http://localhost:3000](http://localhost:3000) with browser.

# Down development
docker compose down --remove-orphans

# Run production (with Nginx server)
docker compose -f docker-compose.yml up --build
# Access [http://localhost](http://localhost) with browser.

# Down production
docker compose down --remove-orphans
```

### Run unit-test with Docker

Run unit-test using Jest

```bash
docker run -it <docker image id> yarn test
```
