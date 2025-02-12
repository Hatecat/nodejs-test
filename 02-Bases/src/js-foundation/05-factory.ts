// const { v4: uuidv4 } = require('uuid');
// const { uuid } = require('../plugins/get-uuid.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
// const {uuid, getAge} = require('../plugins');

interface Options {
    uuid: () => string;
    getAge: (birthdate: string) => number;
}
interface Person {
    name: string;
    birthdate: string;
}

export const buildMakePerson = ({ uuid, getAge }: Options) => {

    return ({ name, birthdate }: Person) => {
        return {
            id: uuid(),
            name: name,
            birthdate,
            age: getAge(birthdate)
        }
    }
}


// const obj = { name: "Daniel", birthdate: "1991-01-12" };

// const john = buildPerson(obj);

// console.log(john);
// console.log(uuid());