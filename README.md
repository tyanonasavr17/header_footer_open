# sed_header_footer
## Getting Started
### Создание образа контейнера
```bash
docker-compose build
```
### Настройка Линтера
```txt
1. Добавить расширение ESLint - https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
2. В настройках включить параметр "eslint.format.enable": true
3. Установить ESLint - форматировщиком по умолчанию для .vue
```

## Check Development with docker
### Создание и запуск контейнера
```bash
docker-compose up front
```
Приложение будет запущено на http://localhost:8080
## Check Production with docker
### Создание и запуск контейнера
```bash
docker-compose up production
```
Приложение будет запущено на http://localhost:8080
## Check Development local

В проекте:
```bash
sudo apt-get install nodejs
```
```bash
npm install
```
Запуск на http://localhost:8080/:
```bash
npm run dev
```
Local Lint:
```bash
npm install --save-dev eslint eslint-formatter-gitlab
```
```bash
npx eslint --format gitlab src/**/*.vue src/*.vue src/**/*.js src/*.js
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).