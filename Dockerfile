FROM node:18-alpine

ARG VITE_MAIL_SERVICE_ID
ARG VITE_MAIL_TEMPLATE_ID
ARG VITE_MAIL_PUBLICK_KEY

RUN mkdir -p /home/app
WORKDIR /home/app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "run", "preview"]