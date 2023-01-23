# Práctica de React Avanzado con Redux

Añadir Redux a la [práctica de fundamentos de React](https://github.com/Joel-Sempere-Cobos/react-fundaments-practice) que ya realizamos. Crear un store con datos de la sesión del usuario, los anuncios y ui, y gestionar los estados relacionados con ellos desde redux.

Crear tests con Jest para reducers, acciones y selectores, síncronos y asíncronos, así como test de snapshot y test de componente.

Se apoya en la API [Nodepop](https://github.com/davidjj76/nodepop-api).

## Carga de tags desde la API

En la práctica de fundamentos los tags estaban hardcodeados. He modificado esa parte de los componentes Filter y NewAvertPage para que redux los almacene desde la API y los componentes los lean de redux. Solo se cargan una vez.

## Carga de anuncios

Los anuncios se cargan al entrar en /adverts y se almacenan en redux. No se vuelven a cargar más a menos que se recargue el navegador.

Los anuncios se muestran de más reciente a más antiguo.

## Detalle

El detalle del anuncio lee la información desde redux, tomando, si la hay, la información de la lista de anuncios ya cargada (no hace nueva petición). Si no la hay, carga solo el anuncio pedido.

## Crear anuncio

El anuncio creado se añade a la lista de anuncios en redux.

## Borrar anuncio

El anuncio borrado se elimina de la lista de anuncios en redux.

## UI

Los estados de carga y de error se leen y modifican siempre en redux.

## Tests

Hay 4 suites de tests (actions, reducers, selectores y el componente LoginPage).

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
