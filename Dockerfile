FROM node:18-alpine

ARG VITE_FORMSPREE_ID

RUN mkdir -p /home/app
WORKDIR /home/app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "run", "preview"]