# Installation

```
npm init

npm install --save-dev webpack

npm install --save-dev webpack-cli

npm install webpack-dev-server --save-dev

npm run dev
```


>"... --mode development" - 
>  такая сборка направлена на ускорение процесса сборки
>"... --mode production" - 
>  такая сборка направлена на итоговую минификацию кода


## Development

```
<body>
    <script src='dist/main.js'></script>
</body>
```

- entry: определяет входные файлы для создания сборок;
- output: определяет конфигурацию выходных файлов;
- resolve: определяет, как будут обрабатываться файлы, если они не имеют расширений;
- module.rules : определяет загрузчики, которые загружают модули;
- plugins: определяет применяемые плагины.

