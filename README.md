npm init

npm install


Aula:
npm init  (Inicia o npm com o package.json)

npm install babel-cli babel-preset-es2015 --save-dev  (intala os modulos do babel client [--save] salva a dependencia no Package.json [-dev] como dependencia de desenvolvimento)

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    "babel": "babel src --out-file js/main.js -w"  (compila o babel da pasta src para o js/main.js com o [-w] watcher)
  },



 echo {"presets": ["es2015"]} > .babelrc




 npm run babel