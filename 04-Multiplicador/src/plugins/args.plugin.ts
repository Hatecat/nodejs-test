import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const args = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'Es el límite de la tabla de multiplicar'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'output/',
        describe: 'Es la carpeta donde se guardará el archivo'
    })
    .option('f', {
        alias: 'fileName',
        type: 'string',
        default: `tabla del {base}`,
        describe: 'Es el nombre del archivo'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }
        if (isNaN(argv.l)) {
            throw 'El límite tiene que ser un número';
        }
        if (argv.l < 1) {
            throw 'El límite debe ser mayor a 0';
        }
        return true;
    })
    .parseSync();