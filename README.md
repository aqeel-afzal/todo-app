# todo-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## Docker
Build an image from a Dockerfile

```
docker build -t todo-app .
```

Run a command in a new container
```
docker run -it -p 8080:8080 --rm --name dockerize-todo-app todo-app
```
