FROM node:14.4-alpine as development

COPY package*.json ./

RUN npm install

COPY . .

FROM development as builder

ARG BASE_URL=""

RUN npm run build

CMD npm run serve

# FROM nginx:1.14-alpine as production

# WORKDIR /usr/share/nginx/html

# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /front/dist /usr/share/nginx/html
