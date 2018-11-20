# Calculadora con EDboilerplate

Ejercicio de calculadora en JavaScript.

## Modo de uso

1. Clone este repositorio (aun no tiene instalacion por npm o yeoman)
2. Ejecute `npm install` (asegurese de tener npm actualizado y Nodejs en v6 como minimo)
3. Ejecute `gulp dev` para trabajar e desarrollo
4. Ejecute `gulp build` para compilar sus archivos para produccion
5. Disfrute

## Estructura

1. La carpeta **src** contiene la estructura de archivos con la que trabajará
2. La carpeta **public** contiene los archivos compilados que deberan llevarse a producción
3. Para Sass importe sus partials desde `styles.scss`, el orden está indicado en el mismo archivo
4. Para Pug, la carpeta `pages` contiene las paginas del proyecto y la carpeta `includes` los bloques.
5. Para Js, la carpeta `modules` contiene los módulos que serán importados desde `index.js`

