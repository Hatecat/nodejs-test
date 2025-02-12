import fs from 'fs';
import { CreateTable } from '../domain/use-cases/create-table.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';

interface RunOptions {
    base: number;
    limit: number;
    show: boolean;
    destination: string;
    fileName: string;
}

export class ServerApp {
    static run({ base, limit, show, destination, fileName }: RunOptions) {

        const table = new CreateTable()
            .execute({ base, limit });
        const name = fileName.replace('{base}', base.toString());
        const file = new SaveFile().execute({ fileContent: table, fileName: name, destination: destination });
        if (show) {
            console.log(table);
        }
        (file) ?
            console.log('File saved') :
            console.log('Error saving file');
    }
}