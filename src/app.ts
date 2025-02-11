// const templates = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require("./js-foundation/03-callbakcs");
// const { getUserById } = require("./js-foundation/04-arrow");
// const { getUserById } = require("./js-foundation/05-factory");
// const { uuid, getAge } = require('./plugins');
// const { buildMakePerson } = require('./js-foundation/05-factory');

// const id = 2;

// getUserById(id,  (error, user) => {
//     if (error) {
//         throw new Error(error);
//     }
//     console.log(user);
// });
// console.log(templates.emailTemplate);
// const makePerson = buildMakePerson({ uuid, getAge });

// const obj = { name: "Daniel", birthdate: "1991-01-12" };

// const daniel = makePerson(obj);

// console.log({ daniel });}



// const getPokemonById = require('./js-foundation/06-promises');

// getPokemonById(1000)
//     .then((pokemon) => console.log({ pokemon }))
//     .catch((error) => console.log("Por favor intente de nuevo"))
//     ;


import { buildLogger } from './plugins/logger.plugin'
const logger = buildLogger('app.js');
logger.log('Hello from app.js');
logger.error('Ocurrio un error :c');