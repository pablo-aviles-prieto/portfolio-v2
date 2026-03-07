FROM node:18-alpine

ARG VITE_MAIL_SERVICE_ID
ARG VITE_MAIL_TEMPLATE_ID
ARG VITE_MAIL_PUBLICK_KEY

RUN corepack enable && corepack prepare pnpm@latest --activate

RUN mkdir -p /home/app
WORKDIR /home/app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

CMD ["pnpm", "run", "preview"]