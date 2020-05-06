# See Live: [Saducci Store](https://saducci-store.herokuapp.com/)
### Overview
An e-commerce progressive web application similar to Shopify but built from scratch. Users can sign-up, sign-in, and add items to the cart, as well as editing their cart either in cart dropdown menu or payment page. 
### Technologies used
- React.js 
- Express.js
- Google Cloud Firestore
- Node.js
- SASS
- Stripe API
### Development highlights
- Increased readability and simplicity of code by converting class components to stateful functional components using React Hooks
- Made development of dynamic client-side routing easier by using React-Router
- Utilized Redux-Saga for managing asynchronous actions to make them easier to manage and better at handling failures
- Improved the performance of the app by implementing code splitting and dynamic imports
- Integrated Google Firebase Authentication to give more authentication options to users
### Codebase highlights
- [Express server to handle payments](https://github.com/bassamkdev/saducci-store/blob/master/server.js)
- [Frontend codebase](https://github.com/bassamkdev/saducci-store/tree/master/client)
- [All React components](https://github.com/bassamkdev/saducci-store/tree/master/client/src/components)
- [Redux](https://github.com/bassamkdev/saducci-store/tree/master/client/src/redux)
- [Users sign-in, sign-out and sing-up sagas](https://github.com/bassamkdev/saducci-store/blob/master/client/src/redux/users/user.sagas.js)
### Running the project locally
1. Clone the project and `cd` into it
2. Run `yarn`
3. Run `yarn dev`, host the app locally and enjoy



