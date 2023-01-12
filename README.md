# Práctica de fundamentos de React

Desarrollar un frontend con create-react-app. Se apoya en la API [Nodepop](https://github.com/davidjj76/nodepop-api).

## Página de login

El usuario puede introducir email y contraseña. Si son erróneos recibe un mensaje de "unauthorized". Si son correctos recibe el token y es redirigido. Ahora puede navegar por el resto de la página.

Si marca la casilla de "recuérdame", el token se almacena en el Local Storage.

## Layout

El layout se compone de un header y un footer. En el header hay un título con enlace a '/adverts', dos navlinks hacia '/adverts' y '/adverts/new' y el botón de logout, que pide confirmación al ser pulsado.

## Listado de anuncios

Aquí aparecen todos los anuncios disponibles. Si no hay anuncios se mostrará un mensaje para indicarlo.

Si hay anuncios, aparecen varios campos para filtrar los resultados. Si no hubiera resultados para una búsqueda concreta, se mostraría un mensaje indicándolo.

Nota: he intentado hace que las búsquedas se actualicen al ingresar en los campos, sin tener que pulsar el botón, pero no lo he conseguido...

## Crear anuncio

Formulario de creación de anuncio. Todos los campos son requeridos menos el de la foto. El botón de enviar solo se activa cuando hay algo en todos los campos requeridos.

## Detalle del anuncio

Vista en detalle del anuncio, con su foto, si la hubiera, o un placeholder en su lugar si no la hubiera.

---

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
