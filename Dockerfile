FROM node:19.4-alpine as development

COPY package*.json ./

RUN npm install

COPY . .

FROM development as builder

ARG BASE_URL=""

RUN npm run build

FROM nginx:1.23.3-alpine as production

WORKDIR /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /dist /usr/share/nginx/html