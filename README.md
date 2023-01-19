# sed_header_footer

## Создание образа контейнера
```bash
docker image build -t header_footer .
```

### Создание и запуск контейнера
```bash
docker container run --rm -p 8080:8080 header_footer
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
