FROM node:19.4-alpine as development

WORKDIR /usr/src

COPY package*.json ./
RUN npm install
ENV PATH /usr/src/node_modules/.bin:$PATH

WORKDIR /usr/src/app
COPY . .

CMD ["npm", "run", "dev"]

FROM development as builder

RUN npm run build

FROM nginx:1.23.3-alpine as production

WORKDIR /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html