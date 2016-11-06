# Gulp-Jade-Sass-BrowserSync
======================================
Proyecto gulp para inicar tareas con Sass Jade y BrowserSync

Incluye las siguientes herramientas, tareas y flujo de trabajo:

- [Gulp-Sass](https://www.npmjs.com/package/gulp-sass/) con [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer/)
- [Gulp-Jade](https://www.npmjs.com/package/gulp-jade/) ahora llamado [pug](http://pugjs.com)
- [BrowserSync](http://browsersync.io) Para la recarga en vivo y un servidor estático


## instalación

Si nunca ha utilizado Node o npm antes, tendrá que instalar Node:

Puede descargar he instalar desde [aqui](https://nodejs.org/en/)

#### Instalar dependencias de npm 

``` 
npm install 
```

Esto se ejecuta a través de todas las dependencias listadas en `package.json` y las descarga en una carpeta `node_modules` en el directorio del proyecto

#### El comando `Gulp`

Para ejecutar la versión de gulp instalada localmente al proyecto, en la raíz de tu proyecto, ejecutarías `gulp` 

¿**Por qué** no puedo ejecutar `gulp`? Bueno, podrías instalar gulp globalmente con 'npm install -g gulp`, que agregará el script gulp a tu carpeta bin global, pero siempre es mejor usar la versión especificada en el paquete package.json de tu proyecto.

#### Nota

Este entorno de trabajo fue hecho bajo windows, ademas de eso trabaja con un proxy para un servidor local. Si no quiere trabajar con un servidor local descomentar las lineas **29 a 32**y comentar **33 a 37**

